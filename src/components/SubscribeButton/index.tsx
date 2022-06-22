import { signIn, useSession } from 'next-auth/react';
import { api } from '../../service/api'
import { getStripeJs } from '../../service/stripe.js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string
}
export function SubscribeButton({ priceId }: SubscribeButtonProps){

    const { data: session } = useSession();

    const handleSubscribe = async () => {
        if(!session){
            signIn('github')
            return;
        }

        try {
            const { data } = await api.post('/subscribe')
            const { sessionId } = data

            const stripe = await getStripeJs()
            await stripe.redirectToCheckout({sessionId})
        } catch (error) {
            let errorMessage = 'Failed';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            alert(errorMessage);
        }
        
        

    }

    return (
        <button 
            type='button'
            className={styles.subscribeButton} 
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}