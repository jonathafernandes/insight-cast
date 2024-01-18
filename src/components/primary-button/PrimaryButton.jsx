import PropTypes from 'prop-types';

export function PrimaryButton(props) {
    return (
        <button
            className={props.className}
        >
            {props.text}
        </button>
    )
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}