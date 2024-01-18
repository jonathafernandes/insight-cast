import PropTypes from 'prop-types';
import './SecondaryButton.module.sass';

export function SecondaryButton(props) {
    return (
        <a
            href={props.href}
            rel="noreferrer noopener"
            className={props.className}
            target={props.target}
        >
            {props.text}
            {props.icon}
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