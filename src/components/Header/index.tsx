import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContext}>
                <img src="/images/logo.svg" alt="tulio_portfolio" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}