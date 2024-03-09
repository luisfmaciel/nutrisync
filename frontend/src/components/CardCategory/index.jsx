import { BoxImg, BoxTitleCard, Card, CardContainer, Img, TitleCard } from "./styles";
import PropTypes from "prop-types";

const CardCategory = ({ image, title, selected, handleSelectCard }) => {
    return (
        <CardContainer onClick={handleSelectCard}>
            <Card selected={selected}>
                <BoxImg>
                    <Img src={image} selected={selected} />
                </BoxImg>
                <BoxTitleCard>
                    <TitleCard>{title}</TitleCard>
                </BoxTitleCard>
            </Card>
        </CardContainer>
    );
};

CardCategory.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    handleSelectCard: PropTypes.func.isRequired,
};

export default CardCategory;
