import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import styles from '../sass/Testimonials.module.sass';

import { TestimonialsCard } from './TestimonialsCard.jsx';

export function Testimonials() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={styles.content} data-aos="fade-up" data-aos-duration="3000">
            <span className={styles.subtitle}>Testimonials</span>
            <h2 className={styles.title}>People like you love</h2>
            <div className={styles.cards}>
                <TestimonialsCard
                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus."
                    name="Maria Silva"
                    role="Lorem ipsum"
                />
                <TestimonialsCard
                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus."
                    name="João Silva"
                    role="Lorem ipsum"
                /> 
                <TestimonialsCard
                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus."
                    name="José Silva"
                    role="Lorem ipsum"
                /> 
            </div>
        </div>
    )
}