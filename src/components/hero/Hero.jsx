import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "../sass/Hero.module.sass";
import stylesButton from '../sass/PrimaryButton.module.sass';
import image from "../../assets/images/dashboard.c764a4bf.jpg";

import { PrimaryButton } from "../primary-button/PrimaryButton";
import { Modal } from '../modal/Modal';
import { X } from '@phosphor-icons/react';

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
                {/* TODO: Renderizar corretamente o botão */}
                <button onClick={handleCloseModal}>
                    <X size={26} />
                </button>
                <h2>
                    Subscribe Now
                    <br />
                    Winter is coming
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ad voluptate corporis impedit inventore nesciunt officia sapiente facere magni maxime, deserunt fuga vitae quod cupiditate ipsa tempore, et sed distinctio.</p>
            </Modal>

            <img src={image} alt="" />
        </div>
    )
}