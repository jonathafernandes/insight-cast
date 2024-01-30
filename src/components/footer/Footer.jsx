import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react';
import { Line } from '../line/Line';
import styles from '../sass/Footer.module.sass';
import logo from '/logo.svg';

export function Footer() {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.infos}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                        <span>Insightcast</span>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore magni minus consequuntur perferendis assumenda quas.
                    </p>
                    <ul className={styles.social}>
                        <li>
                            <a href="#">
                                <FacebookLogo size={40} weight="fill" className={styles.facebookIcon}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <TwitterLogo size={40} weight="fill" className={styles.twitterIcon}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <InstagramLogo size={40} weight="fill" className={styles.instagramIcon}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.products}>
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">News and Stories</a></li>
                        <li><a href="#">Roadmap</a></li>
                    </ul>
                </div>
                <div className={styles.importantLinks}>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="#">Organization Team</a></li>
                        <li><a href="#">Our Journeys</a></li>
                        <li><a href="#">Pricing Plans</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className={styles.company}>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <Line />
            <p className={styles.copy}>© 2024. MIT license.</p>
        </footer>
    );
    }