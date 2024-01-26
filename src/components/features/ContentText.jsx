import { Check } from '@phosphor-icons/react';

import PropTypes from 'prop-types';
import styles from '../sass/Features.module.sass';

export function ContentText(props) {
    return (
        <div className={styles.contentText}>
            <span className={styles.subtitle}>{props.subtitle}</span>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>
            <ul>
                <li>
                    <Check size={20} weight="bold" />
                    <span>
                        {props.listItemOne}
                    </span>
                </li>
                <li>
                    <Check size={20} weight="bold" />
                    <span>
                        {props.listItemTwo}
                    </span>
                </li>
                <li>
                    <Check size={20} weight="bold" />
                    <span>
                        {props.listItemThree}
                    </span>
                </li>
            </ul>
        </div>
    )
}

ContentText.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    listItemOne: PropTypes.string,
    listItemTwo: PropTypes.string,
    listItemThree: PropTypes.string,
}