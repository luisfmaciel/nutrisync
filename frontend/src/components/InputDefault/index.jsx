import {
    InputTitle,
    LabelInput,
    StyledInput,
    TextAreaContainer,
} from "./styles";
import PropTypes from "prop-types";

const InputDefault = ({ title, label, placeholder, disabled }) => {
    return (
        <TextAreaContainer>
            <InputTitle disabled={disabled}>{title}</InputTitle>
            <StyledInput
                placeholder={placeholder}
                disabled={disabled}
                // value={count}
                // onChange={handleChange}
            />

            <LabelInput>{label}</LabelInput>
        </TextAreaContainer>
    );
};

InputDefault.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

export default InputDefault;
