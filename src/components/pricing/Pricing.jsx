import styles from '../sass/Pricing.module.sass';

import { PricingCard } from "./PricingCard";

export function Pricing() {
    return (
        <div className={styles.content}>
            <span>Find your perfect fit</span>
            <h2>Choose your best plan</h2>
            <p>Select the plan that suits your needs and benefit from our analytics tools.</p>
            <div className={styles.cards}>
                <PricingCard 
                    plan="Basic"
                    price="$29"
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis iusto eveniet molestiae aspernatur, magni consectetur.'
                />
                <PricingCard 
                    plan="Premium"
                    price="$59"
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis iusto eveniet molestiae aspernatur, magni consectetur.'
                />
                <PricingCard 
                    plan="Enterprise"
                    price="$99"
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis iusto eveniet molestiae aspernatur, magni consectetur.'
                />
            </div>
        </div>
    );
}