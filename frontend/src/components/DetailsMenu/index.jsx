import { BoxButtons, DetailsContainer, MenuTitle } from "./styles";
import ListItems from "../ListItems";
import ButtonFilled from "../ButtonFilled";
import ButtonStroke from "../ButtonStroke";
import RatingContainer from "../RatingContainer";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const DetailsMenu = ({ selectedItem = {}, onSetClassificationMeunu }) => {
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
            {Object.values(selectedItem).length && (
                <>
                    <RatingContainer
                        ratingMenu={rating}
                        setRating={setRating}
                        selectedItemId={selectedItem._id}
                    />
                    <MenuTitle>{selectedItem.nome}</MenuTitle>
                    <ListItems items={selectedItem.cardapio} />
                    <BoxButtons>
                        <ButtonFilled
                            content="Salvar"
                            onClick={() =>
                                onSetClassificationMeunu(
                                    selectedItem._id,
                                    rating
                                )
                            }
                            disabled={disableButton}
                        />
                        <ButtonStroke content="Excluir" />
                    </BoxButtons>
                </>
            )}
        </DetailsContainer>
    );
};

DetailsMenu.propTypes = {
    selectedItem: PropTypes.object,
    onSetClassificationMeunu: PropTypes.func,
};

export default DetailsMenu;
