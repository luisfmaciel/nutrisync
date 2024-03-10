import { InfoContainer } from "./styles";
import PropTypes from "prop-types";


const BoxInfo = ({ content, showInfoBox = true }) => {
  return (
    <InfoContainer showInfoBox={showInfoBox} >
      { content }
    </InfoContainer>
  )
}

BoxInfo.propTypes = {
    content: PropTypes.any.isRequired,
    showInfoBox: PropTypes.bool
}

export default BoxInfo;
