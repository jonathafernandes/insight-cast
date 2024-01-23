import styles from '../sass/Main.module.sass';

import { Features } from "../features/Features";
import { Hero } from "../hero/Hero";
import { Testimonials } from "../testimonials/Testimonials";
import { Pricing } from "../pricing/Pricing";

export function Main() {
    return (
        <main className={styles.content}>
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
        </main>
    )
}