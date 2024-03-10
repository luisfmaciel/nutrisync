import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { itemsMenu } from "../../components/Sidebar/itemsMenu";
import { NewMenudContainer, Wrapper } from "./styles";
import PainelNewMenu from "../../components/PainelNewMenu";
import SpinnerDefault from "../../components/SpinnerDefault";
import { useState } from "react";
import useRequestNewMenu from "./store/newMenu.store";
import useRequestSignIn from "../Register/store/signIn.store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarMobile from "../../components/SidebarMobile";

const NEW_MENU = "Novo cardápio";

const NewMenu = () => {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const request = useRequestNewMenu((state) => state.request);
    const setRequestNewMenu = useRequestNewMenu(
        (state) => state.setRequestNewMenu
    );
    const generateNewMenu = useRequestNewMenu((state) => state.generateNewMenu);
    const loadingRequest = useRequestNewMenu((state) => state.loading);
    const data = useRequestNewMenu((state) => state.data);
    const setMenu = useRequestNewMenu((state) => state.setMenu);
    const menu = useRequestNewMenu((state) => state.menu);
    const clearData = useRequestNewMenu((state) => state.clearData);
    const saveMenu = useRequestNewMenu((state) => state.saveMenu);
    const menuCreated = useRequestNewMenu((state) => state.menuCreated);
    const errorCreatedMenu = useRequestNewMenu(
        (state) => state.errorCreatedMenu
    );

    const getAccess = useRequestSignIn((state) => state.getAccess);
    const authorized = useRequestSignIn((state) => state.authorized);
    const accessData = useRequestSignIn((state) => state.data);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("register", token);
        getAccess(token);
    }, []);

    useEffect(() => {
        if (!authorized) navigate("/");
    }, [authorized]);

    useEffect(() => {
        setMenu({ userId: accessData.user?._id, tipo: request.food, ...data });
    }, [data]);

    useEffect(() => {
        if (menuCreated) {
            toast.success("O cardápio foi salvo com sucesso");
        } else if (errorCreatedMenu) {
            toast.error("O cardápio não pode ser salvo. Tente novamente!");
        }
    }, [menuCreated, errorCreatedMenu]);

    const handleGenerateMenu = async (request) => {
        try {
            await generateNewMenu(request);
        } catch (error) {
            console.log(error);
        }
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
        <NewMenudContainer>
            <ToastContainer autoClose={3000} theme="colored" />
            <SpinnerDefault loading={loading} />
            <Sidebar itemsMenu={itemsMenu} module={NEW_MENU} />
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
                <PainelNewMenu
                    request={request}
                    setRequestNewMenu={setRequestNewMenu}
                    handleGenerateMenu={handleGenerateMenu}
                    loading={loadingRequest}
                    data={data}
                    setMenu={setMenu}
                    clearData={clearData}
                    saveMenu={saveMenu}
                    menu={menu}
                />
            </Wrapper>
        </NewMenudContainer>
    );
};

export default NewMenu;
