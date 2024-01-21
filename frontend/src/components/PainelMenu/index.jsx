import CardCategory from "../CardCategory";
import CategotyTitle from "../CategoryTitle";
import { BoxDashboard, CardContainer, ListInfoMenu } from "./styles";
import { dataCard } from "./data";

import { useState } from "react";
import CardDetail from "../CardDetail";
import DetailsMenu from "../DetailsMenu";
import BoxInfo from "../BoxInfo";
import PainelContainer from "../PainelContainer";

const flagCategory = "category";
const flagMenu = "menu";
const menuDetails = [
    {
        selected: true,
        name: "Manhã Enrgética",
        calories: "1.200 kcal",
        proteins: "22g",
        fibers: "8g",
        carbohydrates: "60g",
    },
    {
        selected: false,
        name: "Manhã Enrgética2",
        calories: "1.200 kcal",
        proteins: "22g",
        fibers: "8g",
        carbohydrates: "60g",
    },
    {
        selected: false,
        name: "Manhã Enrgética3",
        calories: "1.200 kcal",
        proteins: "22g",
        fibers: "8g",
        carbohydrates: "60g",
    },
];

const PainelMenu = () => {
    const [infoCard, setInfoCard] = useState(dataCard);
    const [infoMenu, setInfoMenu] = useState(menuDetails);

    const handleSelectCard = (name, listItens, flag) => {
        const newList = listItens.map((item) => {
            return {
                ...item,
                selected: item.name === name ? true : false,
            };
        });
        if (flag === flagCategory) setInfoCard(newList);
        else if (flag === flagMenu) setInfoMenu(newList);
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
                                    key={info.name}
                                    image={info.image}
                                    title={info.title}
                                    selected={info.selected}
                                    handleSelectCard={() =>
                                        handleSelectCard(
                                            info.name,
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
                                    key={detail.name}
                                    selected={detail.selected}
                                    name={detail.name}
                                    calories={detail.calories}
                                    proteins={detail.proteins}
                                    fibers={detail.fibers}
                                    carbohydrates={detail.carbohydrates}
                                    handleSelectCard={() =>
                                        handleSelectCard(
                                            detail.name,
                                            infoMenu,
                                            flagMenu
                                        )
                                    }
                                />
                            ))}
                        </ListInfoMenu>
                    </BoxDashboard>
                    <BoxInfo content={<DetailsMenu />} />
                </>
            }
        />
    );
};

export default PainelMenu;
