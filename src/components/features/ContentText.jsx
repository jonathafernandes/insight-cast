import { Check } from '@phosphor-icons/react';

import PropTypes from 'prop-types';
import styles from '../sass/Features.module.sass';

export function ContentText(props) {
    return (
        <div className={styles.contentText}>
            <span>{props.subtitle}</span>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
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
    content: PropTypes.string,
    listItemOne: PropTypes.string,
    listItemTwo: PropTypes.string,
    listItemThree: PropTypes.string,
}