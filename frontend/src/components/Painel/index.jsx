import CardCategory from "../CardCategory";
import CategotyTitle from "../CategoryTitle";
import { BoxDashboard, BoxInfoMenu, CardContainer, PainelContainer } from "./styles";
import { infoCard } from "./data";

import { useState } from "react";

const Painel = () => {
    const [data, setData] = useState(infoCard);

    const handleSetData = (name) => {
        const newInfoCard = data.map((info) => {
            return {
                ...info,
                selected: info.name === name ? true : false,
            };
        });
        setData(newInfoCard);
    };

    return (
        <PainelContainer>
            <BoxDashboard>
              <CategotyTitle title={"Categorias"} />
              <CardContainer>
                  {data.map((info) => (
                      <CardCategory
                          key={info.name}
                          image={info.image}
                          title={info.title}
                          selected={info.selected}
                          handleSelectCard={() => handleSetData(info.name)}
                      />
                  ))}
              </CardContainer>
              <CategotyTitle title={"Cardápios"} />
            </BoxDashboard>
            <BoxInfoMenu></BoxInfoMenu>
        </PainelContainer>
    );
};

export default Painel;
