import styles from '../sass/TestimonialsCard.module.sass';
import PropTypes from 'prop-types';

import { Quotes } from '@phosphor-icons/react';

export function TestimonialsCard(props) {
    return (
        <div className={styles.card}>
            <Quotes size={46} weight="fill" />
            <div className={styles.info}>
                <p>{props.textContent}</p>
            </div>
            <div className={styles.perfil}>
                <p>{props.name}</p>
                <span>{props.role}</span>
            </div>
        </div>
    )
}

TestimonialsCard.propTypes = {
    textContent: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}