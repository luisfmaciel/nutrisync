import Sidebar from "./components/Sidebar";
import { itemsMenu } from "./components/Sidebar/itemsMenu";

const Dashboard = () => {
    return (
        <>
            <Sidebar itemsMenu={itemsMenu} />
        </>
    )
} 

export default Dashboard;