// import { Link } from "react-router-dom";
import {
    NavItem,
    NavLinks,
    NavMenu,
    NavigationMenu,
    SideDetail,
    SidebarContainer,
    Img,
    ImgBox,
    SidebarFooter,
    SignOutLink,
    SignOutText,
} from "./styles";
import logo from "../../assets/images/logo.svg";
import PropTypes from "prop-types";
import { SignOut } from "@phosphor-icons/react";

const Sidebar = ({ itemsMenu }) => {
    return (
        <SidebarContainer>
            <ImgBox>
                <Img src={logo} />
            </ImgBox>
            <NavigationMenu>
                <SideDetail />
                <NavMenu>
                    {itemsMenu &&
                        itemsMenu.map((item) => (
                            <NavItem key={item.name}>
                                <NavLinks to={item.path}>{item.name}</NavLinks>
                            </NavItem>
                        ))}
                </NavMenu>
            </NavigationMenu>
            <SidebarFooter>
                <SignOutLink to={"/"}>
                    <SignOutText>Sign out</SignOutText>
                    <SignOut size={24} />
                </SignOutLink>
            </SidebarFooter>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    itemsMenu: PropTypes.array.isRequired,
};

export default Sidebar;
