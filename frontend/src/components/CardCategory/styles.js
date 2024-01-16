import styled from "styled-components";

export const CardContainer = styled.div`
    width: 160px;
    height: 126px;
    display: flex;
    align-items: end;
    background-color: #f6f6f6;
    margin: 0px 12px 0px 12px;

`;

export const Img = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50%;
    background-color: transparent;
    width: ${({ selected }) => (selected ? '100px' : '86px')};
    transition: width 0.3s ease;
`;

export const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;
    width: 160px;
    height: 100px;
    bottom: 0;
    padding: 14px;
    border-radius: 5px;
    cursor: pointer;
    background: ${({ selected }) => (selected ? 'linear-gradient(106deg, rgba(251, 168, 28, 0.50) 1.82%, rgba(251, 168, 28, 0.00) 106.52%)' : '#FFFFFF') };
    box-shadow: ${({ selected }) => (selected ? '0px 4px 8px 0px rgba(0, 0, 0, 0.25)' : null)};

    &:hover {
        ${Img} {
            width: 100px;
        }
    }
`;

export const TitleCard = styled.span`
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
`;
