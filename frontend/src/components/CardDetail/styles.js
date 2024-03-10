import styled from "styled-components";
import { Accordion } from "react-bootstrap";

export const CardContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    margin: 16px 0;
    padding: 0 38px;
    background: ${({ selected }) =>
        selected
            ? "linear-gradient(106deg, rgba(251, 168, 28, 0.50) 1.82%, rgba(251, 168, 28, 0.00) 106.52%)"
            : "#FFFFFF"};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
        display: none;
    }
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

export const BoxButton = styled.div`
    height: fit-content;
`;

export const StyledAccordion = styled(Accordion)`
    .accordion-button {
        /* background-color: red; */
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 5px;
        margin-bottom: 16px;
        padding: 16px 16px;
        background: ${({ selected }) => selected ? "linear-gradient(106deg, rgba(251, 168, 28, 0.50) 1.82%, rgba(251, 168, 28, 0.00) 106.52%)" : "#FFFFFF"};
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        color: black;
    }

    .accordion-body {
        /* border: none; */
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }
    
    .accordion-item {
        border: none;
        background-color: transparent;
        margin-bottom: 16px;

    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;
