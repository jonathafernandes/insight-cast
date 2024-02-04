import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import styles from '../sass/Pricing.module.sass';
import stylesButton from '../sass/PrimaryButton.module.sass';

import { PricingCard } from "./PricingCard";
import { PrimaryButton } from '../primary-button/PrimaryButton';

export function Pricing() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [activePrice, setActivePrice] = useState('monthly');
    const [activeButton, setActiveButton] = useState('monthly');

    return (
        <div
            id="pricing"
            className={styles.content} 
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="200">
            <span className={styles.subtitle}>Find your perfect fit</span>
            <h2 className={styles.title}>Choose your best plan</h2>
            <p className={styles.description}>Select the plan that suits your needs and benefit from our analytics tools.</p>
            <div className={styles.buttons}>
                <PrimaryButton
                    className={`${stylesButton.buttonOne} ${activeButton === 'monthly' ? stylesButton.active : ''}`}
                    onClick={() => { setActivePrice('monthly'); setActiveButton('monthly'); }}
                    text='Monthly'
                />
                <PrimaryButton
                    className={`${stylesButton.buttonOne} ${activeButton === 'yearly' ? stylesButton.active : ''}`}
                    onClick={() => { setActivePrice('yearly'); setActiveButton('yearly'); }}
                    text='Yearly'
                />
            </div>
            <div className={styles.cards}>
                {activePrice === 'monthly' &&
                    <>
                        <PricingCard
                            plan="Basic"
                            price="$29"
                            time='/month'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                        <PricingCard
                            plan="Premium"
                            price="$59"
                            time='/month'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                        <PricingCard
                            plan="Enterprise"
                            price="$99"
                            time='/month'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                    </>
                }
                {activePrice === 'yearly' && 
                    <>
                        <PricingCard
                            plan="Basic"
                            price="$249"
                            time='/yearly'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                        <PricingCard
                            plan="Premium"
                            price="$599"
                            time='/yearly'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                        <PricingCard
                            plan="Enterprise"
                            price="$1049"
                            time='/yearly'
                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                    </>
                }
            </div>
        </div>
    );
}