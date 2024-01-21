import styled from "styled-components";

export const ButtonContainer = styled.button`
    border-radius: 5px;
    background-color: transparent;
    color: #F04037;
    padding: 6px 8px;
    border: 1px solid #F04037;
    cursor: pointer;
    transition: 0.3s ease-out;  

    &:hover {
        border: none;
        background-color: #D04037;
        color: #ffffff;
    }
`;
