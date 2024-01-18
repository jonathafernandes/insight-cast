import logo from '/logo.svg';
import styles from '../sass/Header.module.sass';

import { GithubLogo } from "@phosphor-icons/react";
import { SecondaryButton } from '../secondary-button/SecondaryButton';

export function Header() {
    return (
        <header>
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
                    className={styles.button}
                    href='https://github.com/jonathafernandes/insight-cast'
                    target='_blank'
                    icon={<GithubLogo size={22} weight="duotone" />}
                />
            </div>
        </header>
    )
}