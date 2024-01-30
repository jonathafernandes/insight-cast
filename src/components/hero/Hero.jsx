import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "../sass/Hero.module.sass";
import stylesButton from '../sass/PrimaryButton.module.sass';
import image from "../../assets/images/dashboard.c764a4bf.jpg";

import { PrimaryButton } from "../primary-button/PrimaryButton";

export function Hero() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className={styles.content}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="200">
            <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur</p>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p className={styles.description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit qui praesentium ut nulla! Corrupti dolorum ipsam culpa eos.
            </p>
            <div className={styles.buttons}>
                <PrimaryButton 
                    className={stylesButton.buttonOne}
                    text="Iniciar"
                />
                <PrimaryButton
                    className={stylesButton.buttonTwo}
                    text="Demonstração ao vivo"
                />
            </div>
            <img src={image} alt="" />
        </div>
    )
}