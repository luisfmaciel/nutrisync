import styled from "styled-components";

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InputTitle = styled.span`
    font-size: 16px;
    color: ${({ disabled }) => (disabled ? '#737A84' : null)}
`;

export const StyledInput = styled.textarea`
    border: ${({ disabled }) => (disabled ? '0.5px solid #737A84' : ' 0.5px solid #d9d9d9')};
    width: 100%;
    height: 100%;
    font-size: 14px;
    outline: none;
    padding: 8px;
    background-color: ${({ disabled }) => (disabled ? '#D9D9D9' : 'transparent')}; 
`;

export const LabelInput = styled.p`
    color: #979797;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin-top: 4px;
`;
