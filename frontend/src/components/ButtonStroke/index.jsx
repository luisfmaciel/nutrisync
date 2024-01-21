import { ButtonContainer } from "./styles";
import PropTypes from 'prop-types';

const ButtonStroke = ({ content }) => {
  return (
    <ButtonContainer>
      { content }
    </ButtonContainer>
  )
}

ButtonStroke.propTypes = {
  content: PropTypes.string.isRequired
}

export default ButtonStroke;
