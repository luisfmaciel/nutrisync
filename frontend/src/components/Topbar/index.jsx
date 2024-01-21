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

const Topbar = ({ searchBar = false }) => {
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
                        <Username>{"Luis Felipe Barbosa"}</Username>
                        <UserEmail>{"luis.barbosa@al.infnet.edu.br"}</UserEmail>
                    </Infos>
                    <Img src={userCircle} />
                </BoxInfos>
            </BoxInput>
        </TopbarContainer>
    );
};

Topbar.propTypes = {
    searchBar: PropTypes.bool,
};

export default Topbar;
