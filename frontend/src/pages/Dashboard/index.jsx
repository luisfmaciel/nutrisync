import Sidebar from "../../components/Sidebar";
import { itemsMenu } from "../../components/Sidebar/itemsMenu";
import Topbar from "../../components/Topbar";
import Painel from "../../components/PainelMenu";
import { DashboardContainer, Wrapper } from "./styles";
import SpinnerDefault from "../../components/SpinnerDefault";
import { useState } from "react";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
        <DashboardContainer>
            <SpinnerDefault loading={loading} />
            <Sidebar itemsMenu={itemsMenu} />
            <Wrapper>
                <Topbar searchBar={true} />
                <Painel />
            </Wrapper>
        </DashboardContainer>
    );
};

export default Dashboard;
