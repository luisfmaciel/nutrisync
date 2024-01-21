import { InfoContainer } from "./styles";
import PropTypes from "prop-types";


const BoxInfo = ({ content }) => {
  return (
    <InfoContainer>
      { content }
    </InfoContainer>
  )
}

BoxInfo.propTypes = {
    content: PropTypes.any.isRequired
}

export default BoxInfo;
