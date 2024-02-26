import PainelContainer from "../PainelContainer";
import CategotyTitle from "../CategoryTitle";
import BoxInfo from "../BoxInfo";
import { Form, Spinner } from "react-bootstrap";
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
    Loading,
} from "./styles";
import NumericInput from "../NumericInput";
import TextAreaInput from "../TextAreaInput";
import Checkbox from "../Checkbox";
import { useState } from "react";
import ButtonFilled from "../ButtonFilled";
import DetailsResultMenu from "../DetailsResultMenu";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const PainelNewMenu = ({ 
    request, 
    setRequestNewMenu, 
    handleGenerateMenu, 
    loading, 
    data, 
    setMenu, 
    clearData, 
    saveMenu,
    menu 
}) => {
    const [emagrecimento, setEmagrecimento] = useState(false);
    const [ganhoDeMassa, setGanhoDeMassa] = useState(false);
    const [manutencaoDePeso, setManutencaoDePeso] = useState(false);
    const [terapeutica, setTerapeutica] = useState(false);
    const [paleolitica, setPaleolitica] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [food, setFood] = useState('');
    const [goals, setGoals] = useState({
        'Emagrecimento': emagrecimento,
        'Hipertrofia': ganhoDeMassa,
        'Manutenção do peso': manutencaoDePeso,
        'Terapêutica': terapeutica,
        'Paleolítica': paleolitica
    } );
    const [menuName, setMenuName] = useState('');

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
        handleBuildRequest(buildGoals(), 'goal');
    }, [goals]);
    
    useEffect(() => {
        handleBuildRequest(food, 'food');
    }, [food]);
    
    useEffect(() => {   
        setMenu({'nome': menuName});
    }, [menuName]);

    useEffect(() => {
        console.log('request', request);
        if(request.height && request.weight && request.food && request.goal) {
            setDisableButton(false);
        }
    }, [request])

    const buildGoals = () => {
        return Object.entries(goals).reduce((list, [key, value]) => {
            if(value === true) list.push(key);
            return list;
        }, []).join(', ');
    };

    const handleBuildRequest = (value, attribute) => {
        setRequestNewMenu(attribute, value);
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
                                                <option value="breakfast">Café da manhã</option>
                                                <option value="lunch">Almoço</option>
                                                <option value="snack">Lanche</option>
                                                <option value="dinner">Janta</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </BoxContent>
                                </BoxAttributes>
                                <ButtonFilled 
                                    content="Gerar cardápio" 
                                    onClick={() => {
                                        handleGenerateMenu(request);
                                        setMenuName('');
                                    }}
                                    disabled={disableButton}
                                />
                            </BoxFlex>
                        </SectionContainer>
                    </BoxNewMenu>
                    <BoxInfo 
                        content={
                            <>
                                { loading ? (
                                    <Loading>
                                        <Spinner as="span" animation="border" />
                                    </Loading>
                                ) : (
                                    <DetailsResultMenu 
                                        data={data}
                                        menuName={menuName}
                                        handleSetMenuName={(event) => setMenuName(event)}
                                        clearData={clearData}
                                        saveMenu={saveMenu}
                                        menu={menu}
                                    />

                                ) }
                            </>
                        } 
                    />
                </NewMenuContainer>
            }
        />
    );
};

PainelNewMenu.propTypes = {
    request: PropTypes.object.isRequired, 
    setRequestNewMenu: PropTypes.func,
    handleGenerateMenu: PropTypes.func,
    loading: PropTypes.bool,
    data: PropTypes.object,
    setMenu: PropTypes.func,
    clearData: PropTypes.func,
    saveMenu: PropTypes.func,
    menu: PropTypes.object,
}

export default PainelNewMenu;
