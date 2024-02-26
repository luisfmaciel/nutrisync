import Sidebar from "../../components/Sidebar";
import { itemsMenu } from "../../components/Sidebar/itemsMenu";
import Topbar from "../../components/Topbar";
import Painel from "../../components/PainelMenu";
import { DashboardContainer, Wrapper } from "./styles";
import SpinnerDefault from "../../components/SpinnerDefault";
import { useState } from "react";
import useMyMenu from "./store/myMenu.store";
import { useEffect } from "react";
import useRequestSignIn from "../Register/store/signIn.store";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const MY_MENU = "Meus cardápios";

const MyMenu = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("breakfast");
    const getMenuByCategory = useMyMenu((state) => state.getMenuByCategory);
    const classification = useMyMenu((state) => state.classification);
    const setClassificationMenu = useMyMenu(
        (state) => state.setClassificationMenu
    );
    const data = useMyMenu((state) => state.data);
    const loadingMyMenu = useMyMenu((state) => state.loading);

    const authorized = useRequestSignIn((state) => state.authorized);
    const navigate = useNavigate();

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        getMenuByCategory({
            userId,
            category,
        });
    }, []);

    useEffect(() => {
        if (!authorized) navigate("/");
    }, [authorized]);

    return (
        <DashboardContainer>
            <SpinnerDefault loading={loading || loadingMyMenu} />
            <Sidebar itemsMenu={itemsMenu} module={MY_MENU} />
            <Wrapper>
                <Topbar searchBar={true} />
                <Painel
                    onGetMenuByCategory={getMenuByCategory}
                    onSetClassificationMeunu={setClassificationMenu}
                    data={data}
                    classification={classification}
                />
            </Wrapper>
        </DashboardContainer>
    );
};

export default MyMenu;
