import styled from "styled-components";

export const SpinnerContainner = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(217, 217, 217, 0.85);
    position: absolute;
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