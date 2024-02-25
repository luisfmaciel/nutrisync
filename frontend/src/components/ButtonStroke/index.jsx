import { ButtonContainer } from "./styles";
import PropTypes from "prop-types";

const ButtonStroke = ({ content, disabled = false, onClick = () => {} }) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {content}
        </ButtonContainer>
    );
};

ButtonStroke.propTypes = {
    content: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.string.func,
};

export default ButtonStroke;
