import { ButtonContainer } from "./styles";
import PropTypes from 'prop-types';

const ButtonFilled = ({ content, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      { content }
    </ButtonContainer>
  )
}

ButtonFilled.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ButtonFilled;
