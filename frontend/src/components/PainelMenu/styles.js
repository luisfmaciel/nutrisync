import styled from "styled-components";

export const BoxDashboard = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding: 62px;

    @media screen and (max-width: 768px) {
        padding: 28px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 58px 0px;
    background-color: transparent;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 0;
    }
`;

export const BoxInfoMenu = styled.div`
    width: 40%;
    height: 100%;
    border-left: 1px solid #d9d9d9;
`;

export const ListInfoMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    background-color: transparent;
`;

export const Loading = styled.div`
    width: 460px;
    height: 100%;
    background-color: rgba(217, 217, 217, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    span {
        background-color: transparent;
        width: 70px;
        height: 70px;
        font-weight: 700;
        color: rgba(251, 168, 28, 0.5);
    }
`;

export const EmptyMenusContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    width: 15%;
`;

export const TitleInformationText = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;

export const InformationText = styled.p`
    font-size: 16px;
    text-align: center;
`;