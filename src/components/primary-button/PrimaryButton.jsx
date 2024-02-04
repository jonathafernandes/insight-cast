import PropTypes from 'prop-types';

export function PrimaryButton(props) {
    return (
        <button
            className={props.className}
            id={props.id}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

PrimaryButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.string
}