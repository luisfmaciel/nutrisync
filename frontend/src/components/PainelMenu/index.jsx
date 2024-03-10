import CardCategory from "../CardCategory";
import CategotyTitle from "../CategoryTitle";
import { BoxDashboard, CardContainer, EmptyMenusContainer, Img, InformationText, ListInfoMenu, Loading, TitleInformationText } from "./styles";
import { dataCard } from "./data";

import { useState } from "react";
import CardDetail from "../CardDetail";
import DetailsMenu from "../DetailsMenu";
import BoxInfo from "../BoxInfo";
import PainelContainer from "../PainelContainer";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import emptyPlate from "../../assets/images/empty.png";

const flagCategory = "category";
const flagMenu = "menu";

const PainelMenu = ({
    onSetClassificationMeunu,
    data,
    classification,
    deleteMenu,
    successDeletedMenu,
    loadingDeletedMenu,
    setCategory,
    category
}) => {
    const [infoCard, setInfoCard] = useState(dataCard);
    const [infoMenu, setInfoMenu] = useState(data);
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        setInfoMenu(data);
    }, [data]);

    useEffect(() => {
        setSelectedItem({});
    }, [successDeletedMenu, category]);

    useEffect(() => {
        if (classification) {
            let selectedId = "";
            for (let item of infoMenu) {
                if (item.selected) {
                    selectedId = item._id;
                    break;
                }
            }
            setInfoMenu(
                data.map((item) =>
                    item._id === selectedId ? { ...item, selected: true } : item
                )
            );
        }
    }, [classification]);

    const handleSelectCard = (name, listItens, flag) => {
        const newList = listItens.map((item) => {
            return {
                ...item,
                selected: item.nome === name ? true : false,
            };
        });
        if (flag === flagCategory) {
            setInfoCard(newList);
            setCategory(name);
        } else if (flag === flagMenu) {
            setInfoMenu(newList);
            for (let item of newList) {
                if (item.selected) {
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
                            {infoMenu.length ? infoMenu.map((detail) => (
                                <CardDetail
                                    key={detail.id}
                                    selected={detail.selected}
                                    name={detail.nome}
                                    infos={detail.valoresNutricionais || []}
                                    deleteMenu={deleteMenu}
                                    onSetClassificationMeunu={onSetClassificationMeunu}
                                    selectedItem={selectedItem}
                                    handleSelectCard={() =>
                                        handleSelectCard(
                                            detail.nome,
                                            infoMenu,
                                            flagMenu
                                        )
                                    }
                                />
                            )) : (
                                <EmptyMenusContainer>
                                    <Img  src={emptyPlate} />
                                    <TitleInformationText>Nenhum Resultado</TitleInformationText>
                                    <InformationText>Você ainda não possui nenhum cardápio de { infoCard.find(menu => menu.selected).title } </InformationText>
                                </EmptyMenusContainer>
                            )}
                        </ListInfoMenu>
                    </BoxDashboard>
                    {loadingDeletedMenu ? (
                        <Loading>
                            <Spinner as="span" animation="border" />
                        </Loading>
                    ) : (
                        <BoxInfo
                            loading={loadingDeletedMenu}
                            content={
                                <DetailsMenu
                                    selectedItem={selectedItem}
                                    onSetClassificationMeunu={
                                        onSetClassificationMeunu
                                    }
                                    deleteMenu={deleteMenu}
                                />
                            }
                        />
                    )}
                </>
            }
        />
    );
};

PainelMenu.propTypes = {
    onSetClassificationMeunu: PropTypes.func,
    data: PropTypes.object,
    classification: PropTypes.number,
    deleteMenu: PropTypes.func,
    successDeletedMenu: PropTypes.bool,
    loadingDeletedMenu: PropTypes.bool,
    setCategory: PropTypes.func,
    category: PropTypes.string,
};

export default PainelMenu;
