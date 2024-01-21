import { BoxPainel } from "./styles";
import PropTypes from "prop-types";

const PainelContainer = ({ content }) => {
  return (
    <BoxPainel>
      { content }
    </BoxPainel>
  )
}

PainelContainer.propTypes = {
  content: PropTypes.element.isRequired
}

export default PainelContainer;
