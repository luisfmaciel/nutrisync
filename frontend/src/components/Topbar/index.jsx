// import PropTypes from 'prop-types'
import { MagnifyingGlass } from "@phosphor-icons/react";
import {
    BoxInfos,
    BoxInput,
    Infos,
    StyledInput,
    TopbarContainer,
    Img,
    UserEmail,
    Username,
} from "./styles";
import userCircle from "../../assets/images/user-circle.svg";
import PropTypes from "prop-types";

const Topbar = ({ searchBar = false, userName = "", userEmail ="" }) => {
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
        </TopbarContainer>
    );
};

Topbar.propTypes = {
    searchBar: PropTypes.bool,
    userName: PropTypes.string,
    userEmail: PropTypes.string,
};

export default Topbar;
