import styles from '../sass/Faq.module.sass';
import PropTypes from 'prop-types';

export function SummaryCard(props) {
    return (
        <details className={styles.card}>
            <summary>{props.title}</summary>
            <p>{props.description}</p>
        </details>
    )
}

SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}