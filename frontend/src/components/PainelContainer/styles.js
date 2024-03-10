import styled from "styled-components";

export const BoxPainel = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    z-index: 999;
    background-color: #f6f6f6;
    
    @media screen and (max-width: 1200px) {
        height: fit-content;
        flex-direction: column;
    }
`;