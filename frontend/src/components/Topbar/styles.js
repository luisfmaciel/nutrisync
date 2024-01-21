import styled from "styled-components";
// import { FaTimes } from 'react-icons/fa';

export const TopbarContainer = styled.div`
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid #d9d9d9;
`;

export const BoxInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 68px;
    justify-content: ${({ searchBar }) => (searchBar ? "none" : "end")};
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
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
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
