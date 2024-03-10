import styled from "styled-components";

const breakpoints = {
    small: "600px",
    medium: "900px",
    large: "1200px",
};

export const ListItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const BoxListItems = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    /* @media (min-width: ${breakpoints.large}) {
        flex-direction: column;
        align-items: flex-start;
    } */
`;

export const IngredientText = styled.span`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin: 12px 0;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
`;
