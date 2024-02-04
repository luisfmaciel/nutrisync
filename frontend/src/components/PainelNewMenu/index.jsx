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
import { useEffect } from "react";

const request = {
    weight: "",
    height: "",
    age: "",
    preference: "",
    restriction: "",
    goal: "",
    goalKgs: "",
    healthProblems: "",
    food: "",
};

const PainelNewMenu = () => {
    const [emagrecimento, setEmagrecimento] = useState(false);
    const [ganhoDeMassa, setGanhoDeMassa] = useState(false);
    const [manutencaoDePeso, setManutencaoDePeso] = useState(false);
    const [terapeutica, setTerapeutica] = useState(false);
    const [paleolitica, setPaleolitica] = useState(false);
    const [food, setFood] = useState('');
    const [goals, setGoals] = useState({
        'Emagrecimento': emagrecimento,
        'Hipertrofia': ganhoDeMassa,
        'Manutenção do peso': manutencaoDePeso,
        'Terapêutica': terapeutica,
        'Paleolítica': paleolitica
    } );

    useEffect(() => {
        setGoals({
            'Emagrecimento': emagrecimento,
            'Hipertrofia': ganhoDeMassa,
            'Manutenção do peso': manutencaoDePeso,
            'Terapêutica': terapeutica,
            'Paleolítica': paleolitica
        });
    }, [emagrecimento, ganhoDeMassa, manutencaoDePeso, terapeutica, paleolitica]);
    
    useEffect(() => {
        handleBuildRequest(buildGoals(), 'goal')
    }, [goals]);
    
    useEffect(() => {
        handleBuildRequest(food, 'food')
    }, [food]);

    const buildGoals = () => {
        return Object.entries(goals).reduce((list, [key, value]) => {
            if(value === true) list.push(key);
            return list;
        }, []).join(', ');
    };

    const handleBuildRequest = (value, attribute) => {
        if (attribute === "goal") {
            [emagrecimento, ganhoDeMassa, manutencaoDePeso, terapeutica, paleolitica ];
        }
        request[attribute] = value;
        console.log("=======>>", request);
    };

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
                                        onChange={(event) =>
                                            handleBuildRequest(event, "height")
                                        }
                                    />
                                    <NumericInput
                                        label={"Medida em kg"}
                                        title={"Peso"}
                                        onChange={(event) =>
                                            handleBuildRequest(event, "weight")
                                        }
                                    />
                                    <NumericInput
                                        label={"Anos"}
                                        title={"Idade"}
                                        onChange={(event) => handleBuildRequest(event, "age")}
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
                                        onChange={(event) => handleBuildRequest(event, "preference")}
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
                                        onChange={(event) => handleBuildRequest(event, "restriction")}
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
                                                onChange={() => setEmagrecimento(!emagrecimento)}
                                                label={"Emagrecimento"}
                                            />
                                            <Checkbox
                                                checked={ganhoDeMassa}
                                                onChange={() => setGanhoDeMassa(!ganhoDeMassa)}
                                                label={"Hipertrofia"}
                                            />
                                            <Checkbox
                                                checked={manutencaoDePeso}
                                                onChange={() => setManutencaoDePeso(!manutencaoDePeso)}
                                                label={"Manutenção do peso"}
                                            />
                                            <Checkbox
                                                checked={terapeutica}
                                                onChange={() =>  setTerapeutica(!terapeutica)}
                                                label={"Terapêutica"}
                                            />
                                            <Checkbox
                                                checked={paleolitica}
                                                onChange={() => setPaleolitica(!paleolitica)}
                                                label={"Paleolítica"}
                                            />
                                        </BoxCheckbox>
                                        <TitleInBox>Objetivos</TitleInBox>
                                        <LineBottom />
                                        <NumericInput
                                            label={"Informe quantos kg deseja perder ou ganhar"}
                                            title={"Peso"}
                                            onChange={(event) => handleBuildRequest(event, "goalKgs")}
                                        />
                                        <TextAreaInput
                                            label={"Ex.: Diabetes, Hipertensão..."}
                                            title={"Problemas de saúde"}
                                            placeholder={"Informe a(s) doenças em tratamento..."}
                                            // disabled={true}
                                            onChange={(event) => handleBuildRequest(event, "healthProblems")}
                                        />
                                    </BoxContent>
                                </BoxAttributes>
                            </BoxCategory>
                            <BoxFlex>
                                <BoxAttributes>
                                    <BoxContent>
                                        <TitleInBox>Refeição</TitleInBox>
                                        <Form.Group controlId="formBasicSelect">
                                            <Form.Select
                                                value={food}
                                                size="sm"
                                                onChange={(event) => setFood(event.currentTarget.value)}
                                            >
                                                <option defaultChecked value={''} >Selecione uma refeição</option>
                                                <option value="Café da manhã">Café da manhã</option>
                                                <option value="Almoço">Almoço</option>
                                                <option value="Lanche">Lanche</option>
                                                <option value="Janta">Janta</option>
                                            </Form.Select>
                                        </Form.Group>
                                        {/* <Form.Select size="sm">
                                            <option>Café da manhã</option>
                                            <option>Almoço</option>
                                            <option>Lanche</option>
                                            <option>Janta</option>
                                        </Form.Select> */}
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
