import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "../sass/Hero.module.sass";
import stylesButton from '../sass/PrimaryButton.module.sass';
import image from "../../assets/images/dashboard.c764a4bf.jpg";
import logo from '/logo.svg';

import { PrimaryButton } from "../primary-button/PrimaryButton";
import { Modal } from '../modal/Modal';
import { X } from '@phosphor-icons/react';
import { ContentText } from '../features/ContentText';

export function Hero() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

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
                <PrimaryButton className={stylesButton.buttonOne} onClick={handleOpenModal} text='Iniciar'/>
                <PrimaryButton className={stylesButton.buttonTwo} onClick={handleOpenModal} text='Demonstração ao vivo' />
            </div>
            <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                <div className={styles.modal}>
                    <div className={styles.text}>
                        <button className={styles.modalCloseBtn} onClick={handleCloseModal}>
                            <X size={26} />
                        </button>
                        <div className={styles.logo}>
                            <img className={styles.logoImg} src={logo} alt="" />
                            <span>Insightcast</span>
                        </div>
                        <h2>
                            Subscribe Now
                            <br />
                            <span>
                                Winter is coming
                            </span>
                        </h2>
                        <ContentText
                            listItemOne="Lorem ipsum dolor sit amet"
                            listItemTwo="Lorem ipsum dolor sit amet"
                            listItemThree="Lorem ipsum dolor sit amet"
                        />
                    </div>
                    <div className={styles.form}>
                        <label htmlFor="email">Join 3,953 other developers</label>
                        <input id='email' name='email' type="email" placeholder='Your e-mail address'></input>
                        <PrimaryButton className={stylesButton.buttonOne} onClick={handleCloseModal} text='Join Now'/>
                    </div>
                </div>
            </Modal>

            <img className={styles.heroImg} src={image} alt="" />
        </div>
    )
}