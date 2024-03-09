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
    const deleteMenu = useMyMenu((state) => state.deleteMenu);
    const successDeletedMenu = useMyMenu((state) => state.successDeletedMenu);
    const classification = useMyMenu((state) => state.classification);
    const setClassificationMenu = useMyMenu(
        (state) => state.setClassificationMenu
    );
    const data = useMyMenu((state) => state.data);
    const loadingMyMenu = useMyMenu((state) => state.loading);
    const loadingDeletedMenu = useMyMenu((state) => state.loadingDeletedMenu);

    const getAccess = useRequestSignIn((state) => state.getAccess);
    const authorized = useRequestSignIn((state) => state.authorized);
    const accessData = useRequestSignIn((state) => state.data);

    const navigate = useNavigate();

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("register", token);
        getAccess(token);
    }, []);

    useEffect(() => {
        handleGetMenuByCategory();
    }, []);

    useEffect(() => {
        handleGetMenuByCategory();
    }, [successDeletedMenu, category]);

    useEffect(() => {
        if (!authorized) navigate("/");
    }, [authorized]);

    const handleGetMenuByCategory = () => {
        const userId = localStorage.getItem("userId");
        getMenuByCategory({
            userId,
            category,
        });
    };
    return (
        <DashboardContainer>
            <SpinnerDefault loading={loading || loadingMyMenu} />
            <Sidebar itemsMenu={itemsMenu} module={MY_MENU} />
            <Wrapper>
                <Topbar
                    searchBar={true}
                    userName={accessData.user?.name}
                    userEmail={accessData.user?.email}
                />
                <Painel
                    onSetClassificationMeunu={setClassificationMenu}
                    data={data}
                    classification={classification}
                    deleteMenu={deleteMenu}
                    successDeletedMenu={successDeletedMenu}
                    loadingDeletedMenu={loadingDeletedMenu}
                    setCategory={setCategory}
                    category={category}
                />
            </Wrapper>
        </DashboardContainer>
    );
};

export default MyMenu;
