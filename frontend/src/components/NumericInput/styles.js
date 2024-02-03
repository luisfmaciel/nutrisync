import styled from "styled-components";

export const NumericInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoxInput = styled.div`
    width: 100px;
    height: 36px;
    border: 0.5px solid #d9d9d9;
    display: flex;
`;

export const InputTitle = styled.span`
    font-size: 16px;
`;

export const StyledInput = styled.input`
    border: none;
    width: 60%;
    height: 100%;
    margin-left: 6px;
    font-size: 14px;
    outline: none;
    padding: 8px;
`;

export const BoxCount = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    border-left: 0.5px solid #d9d9d9;

    span:first-child {
        border-bottom: 0.5px solid #d9d9d9;
    }
`;

export const Count = styled.span`
    width: 100%;
    height: 50%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: 0.3ms all ease-out;

    &:hover {
        background-color: #d9d9d9;
    }
`;

export const LabelInput = styled.p`
    color: #979797;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin-top: 4px;
`;
