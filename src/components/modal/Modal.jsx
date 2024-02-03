import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from "../sass/Modal.module.sass";

import PropTypes from 'prop-types';

export function Modal ({ isOpen, children }) {
    useEffect(() => {
        AOS.init();
    }, []);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="200">
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}
