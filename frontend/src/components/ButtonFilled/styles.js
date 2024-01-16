import styled from "styled-components";

export const ButtonContainer = styled.button`
    border-radius: 5px;
    background: rgba(251, 168, 28, 0.5);
    color: #ffffff;
    padding: 6px 8px;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;

    &:hover {
        background-color: rgba(251, 168, 28);
    }
`;
