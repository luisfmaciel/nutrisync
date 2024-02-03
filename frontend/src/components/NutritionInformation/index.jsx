import { InfoBox, InfoContainer, Title, Value } from "./styles";
import PropTypes from "prop-types";

const NutrintionInformation = ({ items }) => {
    return (
        <InfoContainer>
            {items &&
                items.map((item) => 
                    <InfoBox key={item.title}>
                        <Title>{item.title}</Title>
                        <Value>{item.value}</Value>
                    </InfoBox>
                )}
        </InfoContainer>
    );
};

NutrintionInformation.propTypes = {
    items: PropTypes.array.isRequired,
};

export default NutrintionInformation;
