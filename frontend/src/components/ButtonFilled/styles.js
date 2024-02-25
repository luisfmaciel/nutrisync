import styled from "styled-components";

export const ButtonContainer = styled.button`
    border-radius: 5px;
    background: ${({ disabled }) => disabled ? '#c4c4c4' : 'rgba(251, 168, 28, 0.5)'};
    color: #ffffff;
    padding: 6px 8px;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;
    width: 100%;
    
    
    &:hover {
        background-color: ${({ disabled }) => disabled ? null : 'rgba(251, 168, 28)'};
    }
`;
