import logo from '/logo.svg';
import styles from './Header.module.sass'
import { SecondaryButton } from '../secondary-button/SecondaryButton';

export function Header() {
    return (
        <div className={styles.content}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
                <span>Insightcast</span>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Características</li>
                    <li>Preços</li>
                    <li>Opinião</li>
                    <li>Perguntas frequentes</li>
                </ul>
            </nav>
            <SecondaryButton
                text="Código fonte"
                className={styles.headerButton}
            />
        </div>
    )
}