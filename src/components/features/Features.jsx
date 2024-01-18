import styles from '../sass/Features.module.sass';

import feature1 from '../../assets/images/feature1.e0027e8f.jpg';
import feature2 from '../../assets/images/feature2.7379c11f.jpg';
import feature3 from '../../assets/images/feature3.552ca605.jpg';
import feature4 from '../../assets/images/feature4.f680f503.jpg';

export function Features() {
    return (
        <div className={styles.content}>
            <section>
                <div className={styles.contentText}>
                    <span>Lorem ipsum dolor sit</span>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum, praesentium consectetur voluptatem vitae natus consequuntur modi esse.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit, amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </ul>
                </div>
                <div className={styles.contentImages}>
                    <div>
                        <img src={feature1} alt="" />
                        <img src={feature2} alt="" />
                    </div>
                    <div>
                        <img src={feature3} alt="" />
                        <img src={feature4} alt="" />
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    )
}