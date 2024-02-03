import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { itemsMenu } from "../../components/Sidebar/itemsMenu";
import { NewMenudContainer, Wrapper } from "./styles";
import PainelNewMenu from "../../components/PainelNewMenu";
import SpinnerDefault from "../../components/SpinnerDefault";
import { useState } from "react";

const NEW_MENU = "Novo cardápio";

const NewMenu = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    return (
        <NewMenudContainer>
            <SpinnerDefault loading={loading} />
            <Sidebar itemsMenu={itemsMenu} module={NEW_MENU} />
            <Wrapper>
                <Topbar />
                <PainelNewMenu />
            </Wrapper>
        </NewMenudContainer>
    );
};

export default NewMenu;
