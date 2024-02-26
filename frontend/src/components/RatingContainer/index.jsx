import { BoxRating, ValueRating } from "./styles";
import { Rating } from "react-simple-star-rating";
import PropTypes from "prop-types";

const RatingContainer = ({ ratingMenu = 0, isDisabled = false, setRating, selectedItemId }) => {
    return (
        <BoxRating>
            <ValueRating>{ratingMenu.toFixed(1)}</ValueRating>
            <Rating
                initialValue={ratingMenu}
                fillColor="#FEDC5A"
                size={24}
                onClick={(rate) => setRating(rate)}
                readonly={isDisabled}
            />
        </BoxRating>
    );
};

RatingContainer.propTypes = {
    ratingMenu: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool,
    setRating: PropTypes.func,
    selectedItemId: PropTypes.func
}

export default RatingContainer;
