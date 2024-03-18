import Sidebar from "../../components/Sidebar";
import { itemsMenu } from "../../components/Sidebar/itemsMenu";
import { BoxNotFound, Img, NotFoundContainer, Wrapper } from "./styles";
import SpinnerDefault from "../../components/SpinnerDefault";
import { useState } from "react";
import Topbar from "../../components/Topbar";
import useRequestSignIn from "../Register/store/signIn.store";
import SidebarMobile from "../../components/SidebarMobile";
import notFound from "../../assets/images/404.png"
// const NEW_MENU = "Novo cardápio";

const NotFound = () => {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const accessData = useRequestSignIn((state) => state.data);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NotFoundContainer>
            <SpinnerDefault loading={loading} />
            <Sidebar itemsMenu={itemsMenu} />
            <Wrapper>
                <SidebarMobile
                    isOpen={isOpen}
                    onToggle={handleToggle}
                    itemsMenu={itemsMenu}
                />
                <Topbar
                    userName={accessData.user?.name}
                    userEmail={accessData.user?.email}
                    onToggle={handleToggle}
                />
                <BoxNotFound>
                    <Img src={notFound} />
                </BoxNotFound>
            </Wrapper>
        </NotFoundContainer>
    );
};

export default NotFound;
