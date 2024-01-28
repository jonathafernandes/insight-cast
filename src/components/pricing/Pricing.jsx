import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import styles from '../sass/Pricing.module.sass';

import { PricingCard } from "./PricingCard";

export function Pricing() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="pricing" className={styles.content} data-aos="fade-up" data-aos-duration="3000">
            <span className={styles.subtitle}>Find your perfect fit</span>
            <h2 className={styles.title}>Choose your best plan</h2>
            <p className={styles.description}>Select the plan that suits your needs and benefit from our analytics tools.</p>
            <div className={styles.cards}>
                <PricingCard 
                    plan="Basic"
                    price="$29"
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                />
                <PricingCard 
                    plan="Premium"
                    price="$59"
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                />
                <PricingCard 
                    plan="Enterprise"
                    price="$99"
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                />
            </div>
        </div>
    );
}