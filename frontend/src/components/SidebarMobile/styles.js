import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    /* top: 0; */
    left: 0;
    transition: 0.3s ease-in-out;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    height: 100%;
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarMenu = styled.ul`
    height: 40%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-left: 0 !important;

    @media screen and (max-width: 480px) {
        /* grid-template-rows: repeat(6, 80px); */
    }
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #fff;
        color: #010606;
    }
`;

export const NavLinks = styled(LinkR)`
    font-size: 22px;
    font-weight: ${({ active }) => (active ? "bold" : null)};
    /* background-color: #ffffff; */
    color: ${({ active }) => (active ? "rgba(251, 168, 28)" : "#ffffff")};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    /* padding: 0 1rem; */
    cursor: pointer;

    &:hover {
        color: #d9d9d9;
        font-weight: bold;
        transition: 0.3s ease-out;
    }
`;

export const SignOutText = styled.span`
    color: #ffffff;
    margin-right: 6px;
`;

export const SignOutLink = styled(LinkR)`
    color: #ffffff;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 18px;
`;
