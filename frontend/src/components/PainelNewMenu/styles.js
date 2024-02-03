import styled from "styled-components";

export const NewMenuContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: transparent;
`;

export const BoxNewMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* padding: 36px; */
    background-color: transparent;
    
    
    div:first-child {
        padding-right: 0;
    }
`;

export const BoxAttributes = styled.div`
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    padding: 24px !important;
    margin-top: 12px;
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TitleInBox = styled.span`
    font-size: 16px;
`;

export const LineBottom = styled.div`
    height: 1px;
    width: 100%;
    background-color: #c4c4c4;
    margin-top: 4px;
    margin-bottom: 32px;
`;

export const BoxCheckbox = styled.div`
    display: flex;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 20px;
`;

export const BoxGoals = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const BoxFlex = styled.div`
    display: flex;
    width: 100%;
    /* margin-top: 12px; */
    gap: 36px;
    background-color: transparent;
    align-items: end;
    justify-content: center;

    ${BoxAttributes} {
        margin-bottom: 0;
    }

    button {
        width: 60%;
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 36px;
    flex-direction: column;
    justify-content: space-around;
    background-color: transparent;
`;

export const BoxCategory = styled.div`
    display: flex;
    background-color: transparent;
    flex-direction: column;
`;