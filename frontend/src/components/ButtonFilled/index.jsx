import { ButtonContainer } from "./styles";
import PropTypes from "prop-types";

const ButtonFilled = ({ content, onClick, disabled = false }) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {content}
        </ButtonContainer>
    );
};

ButtonFilled.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default ButtonFilled;
