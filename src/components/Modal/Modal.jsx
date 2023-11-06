import React, { useEffect} from 'react';
import styles from './Modal.module.css';

export const Modal = (props) => {
    const { open, onClose } = props;

    const modalClassName = open ? styles.modalOpen : styles.modalClosed;

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (open) {
            document.body.classList.add(styles.modalOpenBody);
            window.addEventListener('keydown', handleEscapeKey);
        } else {
            document.body.classList.remove(styles.modalOpenBody);
            window.removeEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.body.classList.remove(styles.modalOpenBody);
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className={modalClassName}>
            <div className={styles.modalBackground} onClick={onClose}>
                <div className={styles.modalWindow}>
                    {props.children}
                    <button className={styles.modalWindowButton} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};
