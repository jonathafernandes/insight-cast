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
        <div
            id="testimonials"
            className={styles.content}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="200">
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