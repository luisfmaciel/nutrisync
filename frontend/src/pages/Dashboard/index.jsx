import Sidebar from "../../components/Sidebar";
import { itemsMenu } from "../../components/Sidebar/itemsMenu";
import Topbar from "../../components/Topbar";
import Painel from "../../components/Painel";
import { DashboardContainer, Wrapper } from "./styles";

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Sidebar itemsMenu={itemsMenu} />
            <Wrapper>
                <Topbar />
                <Painel />
            </Wrapper>
        </DashboardContainer>
    )
} 

export default Dashboard;