import PainelContainer from "../PainelContainer";
import CategotyTitle from "../CategoryTitle";
import BoxInfo from "../BoxInfo";
import { Form } from "react-bootstrap";
import {
    BoxNewMenu,
    BoxAttributes,
    NewMenuContainer,
    TitleInBox,
    LineBottom,
    BoxContent,
    BoxCheckbox,
    BoxFlex,
    SectionContainer,
    BoxCategory,
} from "./styles";
import NumericInput from "../NumericInput";
import TextAreaInput from "../TextAreaInput";
import Checkbox from "../Checkbox";
import { useState } from "react";
import ButtonFilled from "../ButtonFilled";
import DetailsResultMenu from "../DetailsResultMenu";

const PainelNewMenu = () => {
    const [emagrecimento, setEmagrecimento] = useState(false);
    const [ganhoDeMassa, setGanhoDeMassa] = useState(false);
    const [manutencaoDePeso, setManutencaoDePeso] = useState(false);
    const [terapeutica, setTerapeutica] = useState(false);
    const [paleolitica, setPaleolitica] = useState(false);

    return (
        <PainelContainer
            content={
                <NewMenuContainer>
                    <BoxNewMenu>
                        <SectionContainer>
                            <BoxCategory>
                                <CategotyTitle title={"Atributos físicos"} />
                                <BoxAttributes>
                                    <NumericInput
                                        label={"Medida em cm"}
                                        title={"Altura"}
                                    />
                                    <NumericInput
                                        label={"Medida em kg"}
                                        title={"Peso"}
                                    />
                                    <NumericInput
                                        label={"Anos"}
                                        title={"Idade"}
                                    />
                                </BoxAttributes>
                            </BoxCategory>
                            <BoxCategory>
                                <CategotyTitle
                                    title={"Preferências Alimentares"}
                                />
                                <BoxAttributes>
                                    <TextAreaInput
                                        label={"Ex.: Arroz, feijão"}
                                        title={"Alimento"}
                                        placeholder={
                                            "Inclua alimentos que não podem faltar na sua dieta"
                                        }
                                    />
                                </BoxAttributes>
                            </BoxCategory>
                            <BoxCategory>
                                <CategotyTitle
                                    title={"Restrições Alimentares"}
                                />
                                <BoxAttributes>
                                    <TextAreaInput
                                        label={"Ex.: Glúten, lactose"}
                                        title={"Alimento"}
                                        placeholder={
                                            "Inclua alimentos que não podem fazer parte da sua dieta"
                                        }
                                    />
                                </BoxAttributes>
                            </BoxCategory>
                        </SectionContainer>
                        <SectionContainer>
                        <BoxCategory>
                            <CategotyTitle title={"Metas de saúde"} />
                            <BoxAttributes>
                                <BoxContent>
                                    <TitleInBox>Tipo de dieta</TitleInBox>
                                    <LineBottom />
                                    <BoxCheckbox>
                                        <Checkbox
                                            checked={emagrecimento}
                                            onChange={() =>
                                                setEmagrecimento(!emagrecimento)
                                            }
                                            label={"Emagrecimento"}
                                        />
                                        <Checkbox
                                            checked={ganhoDeMassa}
                                            onChange={() =>
                                                setGanhoDeMassa(!ganhoDeMassa)
                                            }
                                            label={"Hipertrofia"}
                                        />
                                        <Checkbox
                                            checked={manutencaoDePeso}
                                            onChange={() =>
                                                setManutencaoDePeso(
                                                    !manutencaoDePeso
                                                )
                                            }
                                            label={"Manutenção do peso"}
                                        />
                                        <Checkbox
                                            checked={terapeutica}
                                            onChange={() =>
                                                setTerapeutica(!terapeutica)
                                            }
                                            label={"Terapêutica"}
                                        />
                                        <Checkbox
                                            checked={paleolitica}
                                            onChange={() =>
                                                setPaleolitica(!paleolitica)
                                            }
                                            label={"Paleolítica"}
                                        />
                                    </BoxCheckbox>
                                    <TitleInBox>Objetivos</TitleInBox>
                                    <LineBottom />
                                    <NumericInput
                                        label={
                                            "Informe quantos kg deseja emagrecer"
                                        }
                                        title={"Peso"}
                                    />
                                    <TextAreaInput
                                        label={"Ex.: Diabetes, Hipertensão..."}
                                        title={"Problemas de saúde"}
                                        placeholder={
                                            "Informe a(s) doenças em tratamento..."
                                        }
                                        disabled={true}
                                    />
                                </BoxContent>
                            </BoxAttributes>
                        </BoxCategory>
                            <BoxFlex>
                                <BoxAttributes>
                                    <BoxContent>
                                        <TitleInBox>Refeição</TitleInBox>
                                        <Form.Select size="sm">
                                            <option>Café da manhã</option>
                                            <option>Almoço</option>
                                            <option>Lanche</option>
                                            <option>Janta</option>
                                        </Form.Select>
                                    </BoxContent>
                                </BoxAttributes>
                                <ButtonFilled content="Gerar cardápio" />
                            </BoxFlex>
                        </SectionContainer>
                    </BoxNewMenu>
                    <BoxInfo content={<DetailsResultMenu />} />
                </NewMenuContainer>
            }
        />
    );
};

export default PainelNewMenu;
