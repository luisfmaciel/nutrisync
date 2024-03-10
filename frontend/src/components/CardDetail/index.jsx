// import { Accordion } from "react-bootstrap";
import ButtonFilled from "../ButtonFilled";
import DetailsMenu from "../DetailsMenu";
import {
    BoxButton,
    BoxInfo,
    CardContainer,
    InfoTitle,
    InfoValue,
    StyledAccordion,
} from "./styles";
import PropTypes from "prop-types";

const CardDetail = ({
    selected,
    name,
    infos,
    handleSelectCard,
    deleteMenu,
    onSetClassificationMeunu,
    selectedItem,
}) => {
    return (
        <>
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
            <StyledAccordion selected={selected} onClick={handleSelectCard}>
                <StyledAccordion.Item eventKey="0">
                    <StyledAccordion.Header>
                        <BoxInfo>
                            <InfoTitle>Nome</InfoTitle>
                            <InfoValue>{name}</InfoValue>
                        </BoxInfo>
                        {infos.length &&
                            infos.map((info) => {
                                if (
                                    info.title.toUpperCase() === "NOME" ||
                                    info.title.toUpperCase() === "CALORIAS"
                                ) {
                                    return (
                                        <BoxInfo key={info.title}>
                                            <InfoTitle>{info.title}</InfoTitle>
                                            <InfoValue>{info.value}</InfoValue>
                                        </BoxInfo>
                                    );
                                }
                            })}
                    </StyledAccordion.Header>
                    <StyledAccordion.Body>
                        <DetailsMenu
                            selectedItem={selectedItem}
                            onSetClassificationMeunu={onSetClassificationMeunu}
                            deleteMenu={deleteMenu}
                        />
                    </StyledAccordion.Body>
                </StyledAccordion.Item>
            </StyledAccordion>
        </>
    );
};

CardDetail.propTypes = {
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    infos: PropTypes.array.isRequired,
    handleSelectCard: PropTypes.func.isRequired,
    deleteMenu: PropTypes.func.isRequired,
    onSetClassificationMeunu: PropTypes.func.isRequired,
    selectedItem: PropTypes.object,
};

export default CardDetail;
