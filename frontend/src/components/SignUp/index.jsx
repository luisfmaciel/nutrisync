import { BoxButton, Img, ImgBox, SignUpContainer, Title } from "./styles";
import logo from "../../assets/images/logo.svg";
import InputDefault from "../InputDefault";
import ButtonFilled from "../ButtonFilled";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const SignUp = ({
    onChangeName,
    onChangeEmail,
    onChangePassword,
    showPassword,
    onShowPassword,
    onSubmit
}) => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setdDisableButton] = useState(true);

    useEffect(() => {
        if(email && password && nome) setdDisableButton(false);
        else setdDisableButton(true);
    }, [email, password, nome]);

    return (
        <SignUpContainer>
            <ImgBox>
                <Img src={logo} />
            </ImgBox>

            <Title>Sign Up</Title>

            <InputDefault
                size={"lg"}
                title={"Nome"}
                placeholder={"Ex.: Fulano da Silva"}
                onChange={onChangeName}
                setNome={setNome}
                />
            <InputDefault
                size={"lg"}
                title={"Email"}
                placeholder={"example@example.com"}
                onChange={onChangeEmail}
                setEmail={setEmail}
                />
            <InputDefault
                size={"lg"}
                title={"Senha"}
                placeholder={"Insira a senha"}
                type={!showPassword ? "password" : "text"}
                field={"password"}
                onShowPassword={onShowPassword}
                visible={showPassword}
                onChange={onChangePassword}
                setPassword={setPassword}
            />
            <BoxButton>
                <ButtonFilled content="Registrar" onClick={onSubmit} disabled={disableButton} />
            </BoxButton>
        </SignUpContainer>
    );
};

SignUp.propTypes = {
    showPassword: PropTypes.bool,
    onShowPassword: PropTypes.func,
    onChangeName: PropTypes.func,
    onChangeEmail: PropTypes.func,
    onChangePassword: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default SignUp;
