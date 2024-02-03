import { useState } from "react";
import { BoxCount, Count, InputTitle, LabelInput, BoxInput, StyledInput, NumericInputContainer } from "./styles";
import PropTypes from 'prop-types';

const NumericInput = ({ title, label }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => parseInt(prevCount) + 1);
    };

    const handleDecrement = () => {
        setCount((prevCount) => Math.max(0, parseInt(prevCount) - 1));
    };

    const handleChange = (event) => {
        try {
            let value = event.target.value
            if (value === "") throw new Error();
            
            if (value.length <= 3) {
                value = parseInt(event.target.value)
                setCount(value);
              } else {
                value = value.slice(0, -1);
              }
        } catch {
            setCount(0);
        }
    };

    return (
        <NumericInputContainer>
            <InputTitle>{title}</InputTitle>
            <BoxInput>
                <StyledInput
                    placeholder="0"
                    value={count}
                    onChange={handleChange}
                />
                <BoxCount>
                    <Count onClick={handleIncrement}>+</Count>
                    <Count onClick={handleDecrement}>-</Count>
                </BoxCount>
            </BoxInput>
            <LabelInput>
                {label}
            </LabelInput>
        </NumericInputContainer>
    );
};

NumericInput.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
}

export default NumericInput;
