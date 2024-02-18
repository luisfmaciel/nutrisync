import { BoxButton, Img, ImgBox, SignUpContainer, Title } from "./styles";
import logo from "../../assets/images/logo.svg";
import InputDefault from "../InputDefault";
import ButtonFilled from "../ButtonFilled";
import PropTypes from "prop-types";

const SignUp = ({
    onChangeName,
    onChangeEmail,
    onChangePassword,
    showPassword,
    onShowPassword,
    onSubmit
}) => {
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
            />
            <InputDefault
                size={"lg"}
                title={"Email"}
                placeholder={"example@example.com"}
                onChange={onChangeEmail}
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
            />
            <BoxButton>
                <ButtonFilled content="Registrar" onClick={onSubmit}/>
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
