import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from '../sass/Header.module.sass';
import logo from '/logo.svg';

import { GithubLogo } from "@phosphor-icons/react";
import { SecondaryButton } from '../secondary-button/SecondaryButton';

export function Header() {
    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const scrollLinks = document.querySelectorAll('.scroll-link');
        
        scrollLinks.forEach(scrollLink => {
            scrollLink.addEventListener('click', smoothScroll);
        });

        return () => {
            scrollLinks.forEach(scrollLink => {
                scrollLink.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header>
            <div
                className={styles.content}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="500">
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                    <span>Insightcast</span>
                </div>
                <nav>
                    <ul>
                        <li><a className="scroll-link" href="/">Home</a></li>
                        <li><a className="scroll-link" href="#features">Características</a></li>
                        <li><a className="scroll-link" href="#testimonials">Opinião</a></li>
                        <li><a className="scroll-link" href="#pricing">Preços</a></li>
                        <li><a className="scroll-link" href="#faq">Perguntas frequentes</a></li>
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