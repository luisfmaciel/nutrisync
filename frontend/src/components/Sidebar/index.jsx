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
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequestSignIn from "../../pages/Register/store/signIn.store";

const Sidebar = ({ itemsMenu, module }) => {
    const [items, setItems] = useState(itemsMenu);
    const signOut = useRequestSignIn((state) => state.signOut);
    const authorized = useRequestSignIn((state) => state.authorized);
    const navigate = useNavigate();

    useEffect(() => {
        setItems(
            itemsMenu.map((item) => {
                if (item.name === module) item.active = true;
                else item.active = false;
                return item;
            })
        );
    }, []);

    useEffect(() => {   
        if(!authorized) navigate("/");
    }, [authorized])
    
    const handleSignOut = () => {
        const token = localStorage.getItem('token');
        signOut(token);
    }

    return (
        <SidebarContainer>
            <ImgBox>    
                <Img src={logo} />
            </ImgBox>
            <NavigationMenu>
                <SideDetail />
                <NavMenu>
                    {items &&
                        items.map((item) => (
                            <NavItem key={item.name}>
                                <NavLinks active={item.active} to={item.path}>
                                    {item.name}
                                </NavLinks>
                            </NavItem>
                        ))}
                </NavMenu>
            </NavigationMenu>
            <SidebarFooter>
                <SignOutLink onClick={() => handleSignOut()}>
                    <SignOutText>Sign out</SignOutText>
                    <SignOut size={24} />
                </SignOutLink>
            </SidebarFooter>
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    itemsMenu: PropTypes.array.isRequired,
    module: PropTypes.string.isRequired,
};

export default Sidebar;
