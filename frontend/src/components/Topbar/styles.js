import styled from "styled-components";
// import { FaTimes } from 'react-icons/fa';

export const TopbarContainer = styled.div`
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid #d9d9d9;

    @media screen and (max-width: 1200px) {
        padding: 0 16px
    }
`;

export const BoxInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 68px;
    justify-content: ${({ searchBar }) => (searchBar ? "none" : "end")};

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    color: black;
    display: flex;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
    border: none;
    width: 100%;
    margin-left: 6px;
    font-size: 16px;
    outline: none;
    padding-right: 48px;
    color: #c4c4c4;
`;

export const BoxInfos = styled.div`
    width: 262px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: end;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
`;

export const ImgBoxLogo = styled.div`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    top: 0;
    display: flex;
    justify-content: start;

    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

export const ImgLogo = styled.img`
    width: 106px;
`;
export const Img = styled.img`
    width: 48px;
`;

export const Username = styled.span`
    font-size: 14px;
    font-weight: bolder;
`;

export const UserEmail = styled.span`
    font-size: 10px;
    font-weight: bolder;
`;
