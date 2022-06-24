import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'
import Stripe from "stripe";
import { stripe } from "../../service/stripe";

async function buffer(readable: Readable){
    const chucks = []

    for await (const chuck of readable){
        chucks.push(
            typeof chuck === 'string' ? Buffer.from(chuck) : chuck
        )
    };

    return Buffer.concat(chucks)
}

export const config = {
    api: {
        bodyParser: false
    }
}

const relevantEvents = new Set([
    'checkout.session.completed'
])

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const buf = await buffer(req)
        const secret = req.headers['stripe-signature']

        let event: Stripe.Event

        try {
            event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET)

        } catch (error) {
            return res.status(400).send(`Webhook error: ${error.message}`)
        }

        const { type } = event

        if(relevantEvents.has(type)){
            // fazer algo
            console.log("evento recebido", event);
            
        }

        res.json({ received: true})
    } 
    res.setHeader('Allow', 'POST')
    res.status(405).end('Mathod not allowed')
}