import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import styles from '../sass/Features.module.sass';

import feature1 from '../../assets/images/feature1.e0027e8f.jpg';
import feature2 from '../../assets/images/feature2.7379c11f.jpg';
import feature3 from '../../assets/images/feature3.552ca605.jpg';
import feature4 from '../../assets/images/feature4.f680f503.jpg';
import feature5 from '../../assets/images/feature5.e0027e8f.jpeg';
import feature6 from '../../assets/images/feature6.e0027e8f.jpeg';

import { ContentText } from './ContentText';
import { Line } from '../line/Line';


export function Features() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="features" className={styles.content}>
            <section
                className={styles.one}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="200">
                <ContentText
                    subtitle="Lorem ipsum dolor sit amet"
                    title="We have some great features from the application"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. "
                    listItemOne="Lorem ipsum dolor sit amet"
                    listItemTwo="Lorem ipsum dolor sit amet"
                    listItemThree="Lorem ipsum dolor sit amet"
                />
                <div className={styles.contentImages}>
                    <div>
                        <img src={feature1} alt="" />
                        <img src={feature2} alt="" />
                    </div>
                    <div>
                        <img className={styles.imgThree} src={feature3} alt="" />
                        <img src={feature4} alt="" />
                    </div>
                </div>
            </section>
            <Line />
            <section
                className={styles.two}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="200">
                <ContentText
                    subtitle="Lorem ipsum dolor sit amet"
                    title="We have some great features from the application"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. "
                    listItemOne="Lorem ipsum dolor sit amet"
                    listItemTwo="Lorem ipsum dolor sit amet"
                    listItemThree="Lorem ipsum dolor sit amet"
                />
                <div className={styles.contentImages}>
                    <div>
                        <img src={feature5} alt="" />
                        <img className={styles.imgSix} src={feature6} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}