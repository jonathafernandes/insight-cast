import styles from '../sass/PricingCard.module.sass';
import stylesButton from '../sass/PrimaryButton.module.sass';
import PropTypes from 'prop-types';

import { PrimaryButton } from '../primary-button/PrimaryButton';

export function PricingCard({ plan, price }) {
    return (
        <div className={styles.card}>
            <h3>{plan}</h3>
            <p>{price}</p>
            <PrimaryButton
                className={stylesButton.buttonOne}
                text='Get Started'
            />
        </div>
    );
}

PricingCard.propTypes = {
    plan: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}