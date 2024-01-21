import {
    BoxButtons,
    DetailsContainer,
    MenuTitle,
} from "./styles";
import ListItems from "../ListItems";
import ButtonFilled from "../ButtonFilled";
import ButtonStroke from "../ButtonStroke";
import RatingContainer from "../RatingContainer";

const listItems = [
    { alimento: "Pão Integral", quantidade: "2 fatias" },
    { alimento: "Ovos Mexidos", quantidade: "2 unidades" },
    { alimento: "Abacate", quantidade: "100g" },
    { alimento: "Mamão", quantidade: "150g" },
    { alimento: "Café preto", quantidade: "100ml" },
];

const DetailsMenu = () => {
    return (
        <DetailsContainer>
            <RatingContainer ratingMenu={3} isDisabled={true} />
            <MenuTitle>{"Manhã Energética"}</MenuTitle>
            <ListItems items={listItems} />
            <BoxButtons>
                <ButtonFilled content="Novo Cardápio" />
                <ButtonStroke content="Excluir" />
            </BoxButtons>
        </DetailsContainer>
    );
};

export default DetailsMenu;
