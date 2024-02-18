import styled from "styled-components";

const sizeInput = {
    fontSize_sm: "12px",
    fontSize_lg: "16px",
};

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InputTitle = styled.span`
    font-size: 14px;
    color: ${({ disabled }) => (disabled ? "#737A84" : null)};
    margin-top: 24px;
    `;

export const StyledInput = styled.input`
    border: ${({ disabled }) => disabled ? "0.5px solid #737A84" : " 0.5px solid #d9d9d9"};
    width: 100%;
    height: 100%;
    font-size: ${({ size }) => size && size === "sm" ? `${sizeInput.fontSize_sm}` : `${sizeInput.fontSize_lg}`};
    outline: none;
    padding: 8px;
    background-color: ${({ disabled }) => disabled ? "#D9D9D9" : "transparent"};
`;

export const LabelInput = styled.p`
    color: #979797;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin-top: 4px;
`;

export const InnerIcon = styled.span`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 100;
    cursor: default;
`;
