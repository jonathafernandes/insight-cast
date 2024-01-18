import { Features } from "../features/Features";
import { Hero } from "../hero/Hero";

import styles from '../sass/Main.module.sass';

export function Main() {
    return (
        <main className={styles.content}>
            <Hero />
            <Features />
        </main>
    )
}