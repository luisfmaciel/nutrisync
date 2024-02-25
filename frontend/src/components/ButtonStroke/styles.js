import styled from "styled-components";

export const ButtonContainer = styled.button`
    border-radius: 5px;
    background-color: ${({ disabled }) => disabled ? '#c4c4c4' : ' transparent'};
    color: ${({ disabled }) => disabled ? '#ffffff' : ' #F04037'};
    padding: 6px 8px;
    border: 1px solid ${({ disabled }) => disabled ? '#c4c4c4' : '#F04037'};
    cursor: pointer;
    transition: 0.3s ease-out;  
    
    &:hover {
        border: none;
        border: 1px solid ${({ disabled }) => disabled ? '#c4c4c4' : 'none'};
        background-color: ${({ disabled }) => disabled ? null : ' #D04037'};
        color: #ffffff;
    }
`;
