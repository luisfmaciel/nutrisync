import {
    BoxButtons,
    DetailsContainer,
    EmptyBox,
    InformationText,
    MenuTitle,
} from "./styles";
import ListItems from "../ListItems";
import ButtonFilled from "../ButtonFilled";
import ButtonStroke from "../ButtonStroke";
import InputDefault from "../InputDefault";
import NutrintionInformation from "../NutritionInformation";
import PropTypes from "prop-types";

// const listItems = [
//     // { alimento: "Pão Integral", quantidade: "2 fatias" },
//     // { alimento: "Ovos Mexidos", quantidade: "2 unidades" },
//     // { alimento: "Abacate", quantidade: "100g" },
//     // { alimento: "Mamão", quantidade: "150g" },
//     // { alimento: "Café preto", quantidade: "100ml" },
// ];

// const itens = [
//     { title: "proteínas", value: "22g" },
//     { title: "fibras", value: "8g" },
//     { title: "calorias", value: "800kcal" },
//     { title: "carboidratos", value: "60g" },
// ];

const DetailsResultMenu = ({ data }) => {
    return (
        <DetailsContainer>
            {!data.cardapio ? (
                <>
                    <MenuTitle>Bem Vindo ao NutriSync!</MenuTitle>
                    <EmptyBox>
                        <InformationText>
                            Estamos prontos para criar um cardápio exclusivo
                            para você.
                        </InformationText>
                    </EmptyBox>
                </>
            ) : (
                <>
                    <InputDefault
                        title={"Nome do cardápio"}
                        placeholder={"Ex.:  Café Matinal"}
                    />
                    <MenuTitle>Sugestão de {"café da manhã"}:</MenuTitle>
                    <ListItems items={data.cardapio || []} />
                    <NutrintionInformation
                        items={data.valoresNutricionais || []}
                    />
                </>
            )}
            <BoxButtons>
                <ButtonFilled content="Salvar" />
                <ButtonStroke content="Descartar" />
            </BoxButtons>
        </DetailsContainer>
    );
};

DetailsResultMenu.propTypes = {
    data: PropTypes.data,
};

export default DetailsResultMenu;
