import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { itemsMenu } from "../../components/Sidebar/itemsMenu";
import { NewMenudContainer, Wrapper } from "./styles";
import PainelNewMenu from "../../components/PainelNewMenu";
import SpinnerDefault from "../../components/SpinnerDefault";
import { useState } from "react";
import useRequestNewMenu from "./store/newMenu.store";

const NEW_MENU = "Novo cardápio";

const NewMenu = () => {
    const [loading, setLoading] = useState(true);
    const request = useRequestNewMenu((state) => state.request);
    const setRequestNewMenu = useRequestNewMenu((state) => state.setRequestNewMenu);
    const generateNewMenu = useRequestNewMenu((state) => state.generateNewMenu);
    const loadingRequest = useRequestNewMenu((state) => state.loading);
    const data = useRequestNewMenu((state) => state.data);


    const handleGenerateMenu = async (request) => {
        try {
            await generateNewMenu(request);
        } catch (error) {
            console.log(error);
        }
    }

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
        <NewMenudContainer>
            <SpinnerDefault loading={loading} />
            <Sidebar itemsMenu={itemsMenu} module={NEW_MENU} />
            <Wrapper>
                <Topbar />
                { console.log("data page new menu", data) }
                <PainelNewMenu
                    request={request}
                    setRequestNewMenu={setRequestNewMenu}
                    handleGenerateMenu={handleGenerateMenu}
                    loading={loadingRequest}
                    data={data}
                />
            </Wrapper>
        </NewMenudContainer>
    );
};

export default NewMenu;
