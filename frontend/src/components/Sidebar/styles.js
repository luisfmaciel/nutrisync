import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { breakpoints } from '../../assets/styles/global';


export const SidebarContainer = styled.aside`
    width: 250px;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid #d9d9d9;
    left: 0;

    @media (max-width: ${breakpoints.large}) {
        display: none;
    }
`;

export const NavigationMenu = styled.div`
    display: flex;
    align-items: center;
    left: 0;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
`;

export const SideDetail = styled.div`
    left: 0;
    width: 12px;
    height: 478px;
    background-color: #fba81c80;
    border-radius: 0px 30px 30px 0px;
`;

export const NavMenu = styled.ul`
    height: 478px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    background-color: #ffffff;
    list-style: none;
`;

export const NavItem = styled.li`
    background-color: #ffffff;
`;

export const NavLinks = styled(LinkR)`
    font-size: 16px;
    font-weight: ${({ active }) => (active ? 'bold' : null)};
    background-color: #ffffff;
    color: ${({ active }) => (active ? '#302c2b' : '#c4c4c4')};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
        color: #d9d9d9;
        font-weight: bold;
        transition: 0.3s ease-out;
    }
`;

export const ImgBox = styled.div`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    top: 0;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img`
    background-color: #ffffff;
    width: 50%;
`;

export const SidebarFooter = styled.div`
    width: 100%;
    height: 80px;
    bottom: 0;
    display: flex;
    justify-content: center;
`;

export const SignOutText = styled.span`
    color: #302c2b;
    font-weight: bold;
    margin-right: 6px;
`;

export const SignOutLink = styled(LinkR)`
    color: #302c2b;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 14px;
`;
