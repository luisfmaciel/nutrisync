import PainelContainer from "../PainelContainer";
import DetailsMenu from "../DetailsMenu";
import BoxInfo from "../BoxInfo";

const PainelNewMenu = () => {
    return (
        <PainelContainer
            content={
                <>
                    <div style={{ width: "100%", backgroundColor: 'transparent'}}>teste</div>
                    <BoxInfo content={<DetailsMenu />} />
                </>
            }
        />
    );
};

export default PainelNewMenu;
