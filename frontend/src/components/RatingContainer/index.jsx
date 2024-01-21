import { useState } from "react";
import { BoxRating, ValueRating } from "./styles";
import { Rating } from "react-simple-star-rating";
import PropTypes from "prop-types";

const RatingContainer = ({ ratingMenu = 0, isDisabled = false }) => {
    const [rating, setRating] = useState(ratingMenu);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);

        // other logic
    };
    // Optinal callback functions
    // const onPointerEnter = () => console.log("Enter");
    // const onPointerLeave = () => console.log("Leave");
    // const onPointerMove = (value, index) => console.log(value, index);
    return (
        <BoxRating>
            <ValueRating>{rating.toFixed(1)}</ValueRating>
            <Rating
                initialValue={rating}
                fillColor="#FEDC5A"
                size={24}
                onClick={handleRating}
                readonly={isDisabled}
                // onPointerEnter={onPointerEnter}
                // onPointerLeave={onPointerLeave}
                // onPointerMove={onPointerMove}
                /* Available Props */
            />
        </BoxRating>
    );
};

RatingContainer.propTypes = {
    ratingMenu: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool
}

export default RatingContainer;
