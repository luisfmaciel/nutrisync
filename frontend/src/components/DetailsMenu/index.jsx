import { BoxButtons, BoxNutriInformation, DetailsContainer, EmptyDetailsContainer, Img, InformationText, MenuTitle, NavLinks } from "./styles";
import ListItems from "../ListItems";
import ButtonFilled from "../ButtonFilled";
import ButtonStroke from "../ButtonStroke";
import RatingContainer from "../RatingContainer";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import menuImg from "../../assets/images/menu.png";
import NutrintionInformation from "../NutritionInformation";

const DetailsMenu = ({ selectedItem = {}, onSetClassificationMeunu, deleteMenu }) => {
    const [rating, setRating] = useState(selectedItem.classification || 0);
    const [disableButton, setDisableButton] = useState(true);

    const ratingRef = useRef();

    useEffect(() => {
        setRating(selectedItem.classification);
        ratingRef.current = selectedItem.classification;
    }, [selectedItem]);
    
    useEffect(() => {
        if (ratingRef.current !== rating) setDisableButton(false);
         else setDisableButton(true);
    }, [rating]);

    return (
        <DetailsContainer>
            {Object.values(selectedItem).length ? (
                <>
                    <RatingContainer
                        ratingMenu={rating}
                        setRating={setRating}
                        selectedItemId={selectedItem._id}
                    />
                    <MenuTitle>{selectedItem.nome}</MenuTitle>
                    <ListItems items={selectedItem.cardapio} />
                    <BoxNutriInformation>
                        <NutrintionInformation items={selectedItem.valoresNutricionais} />
                    </BoxNutriInformation>
                    <BoxButtons>
                        <ButtonFilled
                            content="Atualizar"
                            onClick={() =>
                                onSetClassificationMeunu(
                                    selectedItem._id,
                                    rating
                                )
                            }
                            disabled={disableButton}
                        />
                        <ButtonStroke content="Excluir" onClick={() => deleteMenu(selectedItem._id)} />
                    </BoxButtons>
                </>
            ) : (
                <EmptyDetailsContainer>
                    <Img src={menuImg} />
                    <InformationText>
                        Selecione um cardápio para ver mais detalhes ou crie um <NavLinks to={"/dashboard/novo-cardapio"} >novo cardápio</NavLinks>.
                    </InformationText>
                </ EmptyDetailsContainer>
            )}
        </DetailsContainer>
    );
};

DetailsMenu.propTypes = {
    selectedItem: PropTypes.object,
    onSetClassificationMeunu: PropTypes.func,
    deleteMenu: PropTypes.func,
};

export default DetailsMenu;
