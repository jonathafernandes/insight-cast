import styles from '../sass/Testimonials.module.sass';

import { Card } from "./Card";

export function Testimonials() {
    return (
        <div className={styles.content}>
            <span>Testimonials</span>
            <h2>People like you love</h2>
            <div className={styles.cards}>
                <Card
                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus."
                    name="Maria Silva"
                    role="Lorem ipsum"
                />
                <Card
                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus."
                    name="João Silva"
                    role="Lorem ipsum"
                /> 
                <Card
                    textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus."
                    name="José Silva"
                    role="Lorem ipsum"
                /> 
            </div>
        </div>
    )
}