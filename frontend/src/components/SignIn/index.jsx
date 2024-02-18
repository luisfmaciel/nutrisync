import { BoxButton, Img, ImgBox, SignInContainer, Title } from "./styles";
import logo from "../../assets/images/logo.svg";
import InputDefault from "../InputDefault";
import ButtonFilled from "../ButtonFilled";
import PropTypes from "prop-types";

const SignIn = ({ showPassword, onShowPassword, onChangeEmail, onChangePassword, onSubmit }) => {
    return (
        <SignInContainer>
            <ImgBox>
                <Img src={logo} />
            </ImgBox>

            <Title>Sign In</Title>

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
                onChange={onChangePassword}
                visible={showPassword}
            />
            <BoxButton onClick={() => {}}>
                <ButtonFilled content="Login" onClick={onSubmit} />
            </BoxButton>
        </SignInContainer>
    );
};

SignIn.propTypes = {
    showPassword: PropTypes.bool,
    onShowPassword: PropTypes.func,
    onChangeEmail: PropTypes.func , 
    onChangePassword: PropTypes.func , 
    onSubmit: PropTypes.func 
};

export default SignIn;
