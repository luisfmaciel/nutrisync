import styled from "styled-components";

export const RegisterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const RegisterBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
`;

export const RegisterBoxImg = styled.div`
    width: 100%;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-image: url("src/assets/images/food.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-position-x: left;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    background-color: transparent;
    width: 95%;
    transition: width 0.3s ease;
`;

export const MessageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0 60px 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`;

export const WellcomeMessage = styled.p`
    font-size: 36px;
    font-weight: bold;
    background-color: transparent;
    `;

export const SubTextMessage = styled.p`
    /* font-weight: bold; */
    text-align: center;
    background-color: transparent;
`;

export const Button = styled.button`
    width: 20%;
    border-radius: 5px;
    background-color: transparent;
    padding: 6px 8px;
    border: 2px solid black;
    cursor: pointer;
    transition: 0.3s ease-out;

    &:hover {
        border: 2px solid transparent;
        background-color: rgba(251, 168, 28, 0.5);
        /* color: #ffffff; */
    }
`;
