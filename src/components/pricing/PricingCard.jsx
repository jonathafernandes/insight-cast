import styles from '../sass/PricingCard.module.sass';
import stylesButton from '../sass/PrimaryButton.module.sass';
import PropTypes from 'prop-types';

import { PrimaryButton } from '../primary-button/PrimaryButton';
import { Check } from '@phosphor-icons/react';

export function PricingCard({ plan, price, description}) {
    return (
        <div className={styles.card}>
            <h3 className={styles.plan}>{plan}</h3>
            <span className={styles.price}>{price}</span>
            <p className={styles.description}>{description}</p>
            <ul>
                <li>
                    <Check size={20} weight="bold" />
                    <p>
                        Lorem ipsum dolor
                    </p>
                </li>
                <li>
                    <Check size={20} weight="bold" />
                    <p>
                        Lorem ipsum dolor
                    </p>
                </li>
                <li>
                    <Check size={20} weight="bold" />
                    <p>
                        Lorem ipsum dolor
                    </p>
                </li>                <li>
                    <Check size={20} weight="bold" />
                    <p>
                        Lorem ipsum dolor
                    </p>
                </li>                <li>
                    <Check size={20} weight="bold" />
                    <p>
                        Lorem ipsum dolor
                    </p>
                </li>
            </ul>
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
    description: PropTypes.string.isRequired
}