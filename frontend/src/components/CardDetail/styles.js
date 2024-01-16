import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    margin: 16px 0;
    padding: 0 38px;
    cursor: pointer;
    background: ${({ selected }) => (selected ? 'linear-gradient(106deg, rgba(251, 168, 28, 0.50) 1.82%, rgba(251, 168, 28, 0.00) 106.52%)' : '#FFFFFF') };
`;

export const BoxInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
`; 

export const InfoTitle = styled.span`
    font-size: 12px;
    font-weight: bold;
    background-color: transparent;
`;

export const InfoValue = styled.span`
    font-size: 12px;
    background-color: transparent;
`;
