import CardCategory from "../CardCategory";
import CategotyTitle from "../CategoryTitle";
import { BoxDashboard, CardContainer, ListInfoMenu } from "./styles";
import { dataCard } from "./data";

import { useState } from "react";
import CardDetail from "../CardDetail";
import DetailsMenu from "../DetailsMenu";
import BoxInfo from "../BoxInfo";
import PainelContainer from "../PainelContainer";
import PropTypes from "prop-types";
import { useEffect } from "react";

const flagCategory = "category";
const flagMenu = "menu";


const PainelMenu = ({ onGetMenuByCategory, onSetClassificationMeunu, data, classification }) => {
    const [infoCard, setInfoCard] = useState(dataCard);
    const [infoMenu, setInfoMenu] = useState(data);
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        if(infoMenu.length) {
            setInfoMenu((prevState) => (
                prevState.map((item) => infoMenu.indexOf(item) === 0 ? { ...item, selected: true } : item)
            ));
            setSelectedItem(infoMenu[0]);
        }
    }, [])

    useEffect(() => {
        if(classification) {
            let selectedId = '';
            for(let item of infoMenu) {
                if(item.selected) {
                    selectedId = item._id;
                    break;
                }
            }
            setInfoMenu(data.map((item) => item._id === selectedId ? { ...item, selected: true } : item));
        }
    }, [classification])

    const handleSelectCard = (name, listItens, flag) => {
        const newList = listItens.map((item) => {
            return {
                ...item,
                selected: item.nome === name ? true : false,
            };
        });
        if (flag === flagCategory) setInfoCard(newList);
        else if (flag === flagMenu) {
            setInfoMenu(newList);
            for (let item of newList) {
                if(item.selected) {
                    setSelectedItem(item);
                    break;
                }
            }
        }
    };

    return (
        <PainelContainer
            content={
                <>
                    <BoxDashboard>
                        <CategotyTitle title={"Categorias"} />
                        {console.log('data', [data])}
                        <CardContainer>
                            {infoCard.map((info) => (
                                <CardCategory
                                    key={info.nome}
                                    image={info.image}
                                    title={info.title}
                                    selected={info.selected}
                                    handleSelectCard={() =>
                                        handleSelectCard(
                                            info.nome,
                                            infoCard,
                                            flagCategory
                                        )
                                    }
                                />
                            ))}
                        </CardContainer>
                        <CategotyTitle title={"Cardápios"} />
                        <ListInfoMenu>
                            {infoMenu.map((detail) => (
                                <CardDetail
                                    key={detail.id}
                                    selected={detail.selected}
                                    name={detail.nome}
                                    infos={detail.valoresNutricionais || []}
                                    handleSelectCard={() =>
                                        handleSelectCard(
                                            detail.nome,
                                            infoMenu,
                                            flagMenu
                                        )
                                    }
                                />
                            ))}
                        </ListInfoMenu>
                    </BoxDashboard>
                    <BoxInfo content={<DetailsMenu selectedItem={selectedItem} onSetClassificationMeunu={onSetClassificationMeunu} />} />
                </>
            }
        />
    );
};

PainelMenu.propTypes = {
    onGetMenuByCategory: PropTypes.func.isRequired,
    onSetClassificationMeunu: PropTypes.func,
    data: PropTypes.object,
    classification: PropTypes.number,
}

export default PainelMenu;
