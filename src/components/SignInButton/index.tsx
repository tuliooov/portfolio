import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton(){
    const { status, data } = useSession()

    return status === 'authenticated' ? (
        <button className={styles.signInButton}>
            <FaGithub color={'#04d361'} /> 
            {data.user.name}
            <FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()}/>
        </button>
    ) : (
        <button className={styles.signInButton} onClick={() => signIn('github')}>
            <FaGithub color={'#eba417'} /> 
            Sign in with Github
        </button>
    )
}