import { ButtonContainer } from "./styles";
import PropTypes from 'prop-types';

const ButtonFilled = ({ content }) => {
  return (
    <ButtonContainer>
      { content }
    </ButtonContainer>
  )
}

ButtonFilled.propTypes = {
  content: PropTypes.string.isRequired
}

export default ButtonFilled;
