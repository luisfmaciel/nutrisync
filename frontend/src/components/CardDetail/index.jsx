import ButtonFilled from "../ButtonFilled";
import {
    BoxButton,
    BoxInfo,
    CardContainer,
    InfoTitle,
    InfoValue,
} from "./styles";
import PropTypes from "prop-types";

const CardDetail = ({ selected, name, infos, handleSelectCard }) => {
    return (
        <CardContainer selected={selected}>
            <BoxInfo>
                <InfoTitle>Nome</InfoTitle>
                <InfoValue>{name}</InfoValue>
            </BoxInfo>
            {infos.length &&
                infos.map((info) => (
                    <BoxInfo key={info.title}>
                        <InfoTitle>{info.title}</InfoTitle>
                        <InfoValue>{info.value}</InfoValue>
                    </BoxInfo>
                ))}
            <BoxButton onClick={handleSelectCard}>
                <ButtonFilled content={"Detalhes"} />
            </BoxButton>
        </CardContainer>
    );
};

CardDetail.propTypes = {
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    infos: PropTypes.array.isRequired,
    handleSelectCard: PropTypes.func.isRequired,
};

export default CardDetail;
