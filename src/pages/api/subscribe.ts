import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from 'faunadb'
import { getSession } from "next-auth/react";
import { env } from "process";
import { fauna } from "../../service/fauna";
import { stripe } from "../../service/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {

            const session = await getSession({ req });
    
            const user = await fauna.query(
                q.Get(
                    q.Match(
                        q.Index('users_by_email'),
                        q.Casefold(session?.user?.email!)
                    )
                )
            )
            
            let customerId = user.data.stripe_customer_id;
            console.log("🚀 ~ file: subscribe.ts ~ line 28 ~ customerId", customerId)
    
            if (!customerId) {
                const stripeCustomer = await stripe.customers.create({
                    email: session?.user?.email!,
                    //metadata
                })
    
                await fauna.query(
                    q.Update(
                        q.Ref(q.Collection('users'), user.ref.id),
                        {
                            data: {
                                stripe_customer_id: stripeCustomer.id,
                            }
                        }
                    )
                )
    
                customerId = stripeCustomer.id;
                console.log("🚀 ~ file: subscribe.ts ~ line 48 ~ stripeCustomer.id", stripeCustomer.id)
            }

            
    
            const stripeCheckoutSession = await stripe.checkout.sessions.create({
                customer: customerId,
                payment_method_types: ['card'],
                billing_address_collection: 'required',
                line_items: [
                    {
                        price: 'price_1KjZT2DhIAntB1CKJ3n9mW1G',
                        quantity: 1
                    }
                ],
                mode: 'subscription',
                allow_promotion_codes: true,
                success_url: process.env.STRIPE_SUCCESS_URL!,
                cancel_url: process.env.STRIPE_CANCEL_URL!
            })
    
            return res.status(200).json({ sessionId: stripeCheckoutSession.id })
        } else {
            res.setHeader('Allow', 'POST')
            res.status(405).end('Mathod not allowed')
        }
    } catch (error) {
        console.log("error", error);
        res.setHeader('Allow', 'POST')
        res.status(405).end(error)
    }
}