import styled from "styled-components";

export const SignInContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        width: 60%;
    }
`;

export const ImgBox = styled.div`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    margin-bottom: 16px;
    top: 0;
    display: flex;
    justify-content: start;
`;

export const Img = styled.img`
    background-color: #ffffff;
    width: 156px;
`;

export const Title = styled.span`
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const BoxButton = styled.div`
    margin-top: 24px;
`;
