import PropTypes from "prop-types";
import {
    SidebarContainer,
    Icon,
    SidebarWrapper,
    SidebarBtnWrap,
    SidebarMenu,
    NavLinks,
    SignOutLink,
    SignOutText,
} from "./styles";
import { SignOut, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import useRequestSignIn from "../../pages/Register/store/signIn.store";

const SidebarMobile = ({ itemsMenu, module, onToggle, isOpen }) => {
    const [items, setItems] = useState(itemsMenu);
    const signOut = useRequestSignIn((state) => state.signOut);

    useEffect(() => {
        setItems(
            itemsMenu.map((item) => {
                if (item.name === module) item.active = true;
                else item.active = false;
                return item;
            })
        );
    }, []);

    const handleSignOut = () => {
        const token = localStorage.getItem('token');
        signOut(token);
    }

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={() => onToggle()}>
                <X size={28} color="white" />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    { items && items.map(item => (
                        <NavLinks  key={item.name} active={item.active} to={item.path} onClick={() => onToggle()} >
                            {item.name}
                        </NavLinks>
                    )) }
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SignOutLink onClick={() => handleSignOut()}>
                        <SignOutText>Sign out</SignOutText>
                        <SignOut size={24} />
                    </SignOutLink>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

SidebarMobile.propTypes = {
    onToggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    itemsMenu: PropTypes.array.isRequired,
    module: PropTypes.string,
};

export default SidebarMobile;
