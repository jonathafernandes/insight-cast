import logo from '../../assets/logo.svg';
import styles from './Header.module.sass'

export function Header() {
    return (
        <div className={styles.content}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
                <span>Insightcast</span>
            </div>
        </div>
    )
}