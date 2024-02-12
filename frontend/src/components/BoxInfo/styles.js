import styled from "styled-components"; 
import { breakpoints } from "../../assets/styles/global";

export const InfoContainer = styled.div`
    width: 460px;
    max-height: 100%;
    border-left: 1px solid #d9d9d9;
    overflow-y: auto;
    
    @media (max-width: ${breakpoints.large}) {
        display: none;
    }
`;