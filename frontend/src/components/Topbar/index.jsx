// import PropTypes from 'prop-types'
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import {
    BoxInfos,
    BoxInput,
    Infos,
    StyledInput,
    TopbarContainer,
    Img,
    UserEmail,
    Username,
    MobileIcon,
    ImgBoxLogo,
    ImgLogo,
} from "./styles";
import userCircle from "../../assets/images/user-circle.svg";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.svg";

const Topbar = ({ searchBar = false, onToggle, userName = "", userEmail = "" }) => {
    return (
        <TopbarContainer>
            <BoxInput searchBar={searchBar}>
                {searchBar && (
                    <>
                        <MagnifyingGlass size={24} color="#C4C4C4" back />
                        <StyledInput placeholder="Busque seus cardápios favoritos..." />
                    </>
                )}
                <BoxInfos>
                    <Infos>
                        <Username>{userName}</Username>
                        <UserEmail>{userEmail}</UserEmail>
                    </Infos>
                    <Img src={userCircle} />
                </BoxInfos>
            </BoxInput>
            <ImgBoxLogo>
                <ImgLogo src={logo} />
            </ImgBoxLogo>
            <MobileIcon onClick={() => onToggle()}>
                <List size={28} />
            </MobileIcon>
        </TopbarContainer>
    );
};

Topbar.propTypes = {
    searchBar: PropTypes.bool,
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
};

export default Topbar;
