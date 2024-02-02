import styles from "../sass/Modal.module.sass";

import PropTypes from 'prop-types';

export function Modal ({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                {/* TODO: Renderizar corretamente o botão */}
                <button className={styles.modalCloseBtn} onClick={onClose}></button>
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
