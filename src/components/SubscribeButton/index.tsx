import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string
}
export function SubscribeButton({ priceId }: SubscribeButtonProps){

    const {status} = useSession()

    const handleSubscribe = () => {
        if(status !== 'authenticated'){
            signIn('github')
            return;
        }

        

    }

    return (
        <button 
            className={styles.subscribeButton} 
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}