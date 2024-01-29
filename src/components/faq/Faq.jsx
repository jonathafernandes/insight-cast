import { useEffect } from 'react';
import { SummaryCard } from './SummaryCard';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from '../sass/Faq.module.sass';

export function Faq() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            id='faq'
            className={styles.content}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="500">
            <span className={styles.subtitle}>Have any questions?</span>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <div className={styles.cards}>
                <SummaryCard
                    title='What is Bookmark?'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
                />
                <SummaryCard
                    title='How can I request a new browser?'
                    description='Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa.'
                />
                <SummaryCard
                    title='Is there a mobile app?'
                    description='Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus.'
                />
                <SummaryCard
                    title='What about other Chromium browsers?'
                    description='Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
                />
                <SummaryCard
                    title='What features are coming soon?'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
                />
            </div>
        </div>
    );
}