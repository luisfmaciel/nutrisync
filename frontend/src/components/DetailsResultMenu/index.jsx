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

const DetailsResultMenu = ({
    data,
    menuName,
    handleSetMenuName,
    clearData,
    saveMenu,
    menu
}) => {
    return (
        <DetailsContainer>
            {!data.cardapio ? (
                <>
                    <MenuTitle>Bem Vindo ao NutriSync!</MenuTitle>
                    <EmptyBox>
                        <InformationText>
                            Estamos prontos para criar um novo cardápio exclusivo
                            para você.
                        </InformationText>
                    </EmptyBox>
                </>
            ) : (
                <>
                    <InputDefault
                        title={"Nome do cardápio"}
                        placeholder={"Ex.:  Café Matinal"}
                        onChange={handleSetMenuName}
                    />
                    <MenuTitle>Sugestão de {"café da manhã"}:</MenuTitle>
                    <ListItems items={data.cardapio || []} />
                    <NutrintionInformation
                        items={data.valoresNutricionais || []}
                    />
                </>
            )}
            <BoxButtons>
                {console.log('manuname', menuName)}
                <ButtonFilled
                    content="Salvar"
                    onClick={() => {
                        saveMenu(menu);
                        handleSetMenuName('');
                        clearData();
                    }}
                    disabled={menuName ? false : true}
                />
                <ButtonStroke
                    content="Descartar"
                    onClick={() => {
                        clearData();
                        handleSetMenuName('');
                    }}
                    disabled={Object.values(data).length ? false : true}
                />
            </BoxButtons>
        </DetailsContainer>
    );
};

DetailsResultMenu.propTypes = {
    data: PropTypes.object,
    menuName: PropTypes.string,
    handleSetMenuName: PropTypes.func,
    clearData: PropTypes.func,
    saveMenu: PropTypes.func,
    menu: PropTypes.object,
};

export default DetailsResultMenu;
