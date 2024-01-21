import {
    BoxListItems,
    IngredientText,
    ListItemsContainer,
    Separator,
} from "./styles";
import PropTypes from "prop-types";

const ListItems = ({ items }) => {
    return (
        <ListItemsContainer>
            {items.length &&
                items.map((item) => (
                    <>
                        <BoxListItems key={item.alimento}>
                            <IngredientText>{item.alimento}</IngredientText>
                            <IngredientText>{item.quantidade}</IngredientText>
                        </BoxListItems>
                        <Separator />
                    </>
                ))}
        </ListItemsContainer>
    );
};

ListItems.propTypes = {
    items: PropTypes.array,
};

export default ListItems;
