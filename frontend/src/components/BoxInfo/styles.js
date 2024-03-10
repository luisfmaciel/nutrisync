import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 460px;
    max-height: 100%;
    border-left: 1px solid #d9d9d9;
    overflow-y: auto;
    background-color: #ffffff;

    @media screen and (max-width: 1200px) {
        overflow-y: visible;
        width: 100%;
        border: 1px solid #d9d9d9;
        display: ${({ showInfoBox }) => (showInfoBox ? "flex" : "none")};
        justify-content: center;
        margin-bottom: ${({ showInfoBox }) => (showInfoBox ? "32px" : 0)};
    }
`;
