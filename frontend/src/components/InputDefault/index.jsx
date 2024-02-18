import { InputGroup } from "react-bootstrap";
import {
    InputTitle,
    LabelInput,
    StyledInput,
    InputContainer,
    InnerIcon,
} from "./styles";
import PropTypes from "prop-types";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const InputDefault = ({
    title,
    label,
    placeholder,
    size = "sm",
    type = "text",
    field = "",
    visible = false,
    disabled,
    onShowPassword,
    onChange
}) => {

    const handleChange = (event) => {
        try {
            const value  = event.target.value;
            onChange(value);
        } catch (error) {
            console.log(error);
        }
    } 

    return (
        <InputContainer>
            <InputTitle disabled={disabled}>{title}</InputTitle>
            <InputGroup>
                <StyledInput
                    placeholder={placeholder}
                    disabled={disabled}
                    size={size}
                    type={type}
                    // value={count}
                    onChange={(event) => handleChange(event)}
                />

                {field === "password" && (
                    <InnerIcon onClick={onShowPassword}>
                        { visible ? <EyeSlash /> : <Eye /> }
                    </InnerIcon>
                )}

                <LabelInput>{label}</LabelInput>
            </InputGroup>
        </InputContainer>
    );
};

InputDefault.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string, 
    field: PropTypes.string, 
    onShowPassword: PropTypes.func, 
    onChange: PropTypes.func, 
};

export default InputDefault;
