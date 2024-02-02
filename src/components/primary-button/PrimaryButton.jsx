import PropTypes from 'prop-types';

export function PrimaryButton(props) {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

PrimaryButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.string
}