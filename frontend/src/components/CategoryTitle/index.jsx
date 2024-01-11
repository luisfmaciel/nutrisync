import PropTypes from "prop-types";
import { Title, BottomLine, TitleContainer } from './styles';

const CategotyTitle = ({ title }) => {
  return (
    <TitleContainer>
        <Title>{title}</Title>
        <BottomLine />
    </TitleContainer>
  )
}

CategotyTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default CategotyTitle
