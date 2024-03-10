import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    
    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;