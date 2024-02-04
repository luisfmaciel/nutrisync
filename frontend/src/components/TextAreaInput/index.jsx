import { useEffect } from "react";
import {
    InputTitle,
    LabelInput,
    StyledInput,
    TextAreaContainer,
} from "./styles";
import PropTypes from "prop-types";
import { useState } from "react";

const TextAreaInput = ({ title, label, placeholder, onChange = () => {}, disabled }) => {
    const [preference, setPreference] = useState('');

    useEffect(() => {
        onChange(preference);
    }, [preference]);

    return (
        <TextAreaContainer>
            <InputTitle disabled={disabled}>{title}</InputTitle>
            <StyledInput
                placeholder={placeholder}
                disabled={disabled}
                onChange={(event) => setPreference(event.target.value)}
            />

            <LabelInput>{label}</LabelInput>
        </TextAreaContainer>
    );
};

TextAreaInput.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default TextAreaInput;
