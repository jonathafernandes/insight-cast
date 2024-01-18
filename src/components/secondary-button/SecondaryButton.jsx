import PropTypes from 'prop-types';
import styles from '../sass/SecondaryButton.module.sass';

export function SecondaryButton(props) {
    return (
        <a
            href={props.href}
            rel="noreferrer noopener"
            className={props.className}
            target={props.target}
        >
            <div className={styles.content}>
                <span>
                    {props.icon}
                </span>
                <span>
                    {props.text}
                </span>
            </div>
        </a>
    )
}

SecondaryButton.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    target: PropTypes.string,
    className: PropTypes.string
}