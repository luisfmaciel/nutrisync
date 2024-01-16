import ButtonFilled from "../ButtonFilled";
import { BoxInfo, CardContainer, InfoTitle, InfoValue } from "./styles";
import PropTypes from "prop-types";

const CardDetail = ({
    selected,
    name,
    calories,
    proteins,
    fibers,
    carbohydrates,
    handleSelectCard
}) => {
    return (
        <CardContainer 
            selected={selected}
            onClick={handleSelectCard}
        >
            <BoxInfo>
                <InfoTitle>Nome</InfoTitle>
                <InfoValue>{name}</InfoValue>
            </BoxInfo>
            <BoxInfo>
                <InfoTitle>Calorias</InfoTitle>
                <InfoValue>{calories}</InfoValue>
            </BoxInfo>
            <BoxInfo>
                <InfoTitle>Proteínas</InfoTitle>
                <InfoValue>{proteins}</InfoValue>
            </BoxInfo>
            <BoxInfo>
                <InfoTitle>Fibras</InfoTitle>
                <InfoValue>{fibers}</InfoValue>
            </BoxInfo>
            <BoxInfo>
                <InfoTitle>Carboidratos</InfoTitle>
                <InfoValue>{carbohydrates}</InfoValue>
            </BoxInfo>
            <ButtonFilled content={"Detalhes"} />
        </CardContainer>
    );
};

CardDetail.propTypes = {
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
    proteins: PropTypes.string.isRequired,
    fibers: PropTypes.string.isRequired,
    carbohydrates: PropTypes.string.isRequired,
    handleSelectCard: PropTypes.func.isRequired
};

export default CardDetail;
