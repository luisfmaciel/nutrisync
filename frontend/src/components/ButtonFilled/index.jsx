import { ButtonContainer } from "./styles";
import PropTypes from "prop-types";

const ButtonFilled = ({ content, onClick, disabled = false, type = "" }) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled} type={type}>
            {content}
        </ButtonContainer>
    );
};

ButtonFilled.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};

export default ButtonFilled;
