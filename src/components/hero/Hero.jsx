import styles from "../sass/Hero.module.sass";
import image from "../../assets/images/dashboard.c764a4bf.jpg";

import { PrimaryButton } from "../primary-button/PrimaryButton";

export function Hero() {
    return (
        <div className={styles.content}>
            <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur</p>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p className={styles.description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit qui praesentium ut nulla! Corrupti dolorum ipsam culpa eos.
            </p>
            <div className={styles.buttons}>
                <PrimaryButton 
                    className={styles.buttonOne}
                    text="Iniciar"
                />
                <PrimaryButton
                    className={styles.buttonTwo}
                    text="Demonstração ao vivo"
                />
            </div>
            <img src={image} alt="" />
        </div>
    )
}