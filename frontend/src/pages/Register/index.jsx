import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../../components/SignIn";
import {
    Button,
    MessageContainer,
    RegisterBox,
    RegisterBoxImg,
    RegisterContainer,
    SubTextMessage,
    WellcomeMessage,
} from "./styles";
import SignUp from "../../components/SignUp";
import SpinnerDefault from "../../components/SpinnerDefault";
import useRequestSignIn from "./store/signIn.store";
import useRequestSignUp from "./store/signUp.store";

const Register = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const request = useRequestSignIn((state) => state.request);
    const setRequestSignIn = useRequestSignIn((state) => state.setRequestSignIn);
    const signIn = useRequestSignIn((state) => state.signIn);
    const loadingRequest = useRequestSignIn((state) => state.loading);
    const getAccess = useRequestSignIn((state) => state.getAccess);
    const authorized = useRequestSignIn((state) => state.authorized);
    // const data = useRequestSignIn((state) => state.data);
    
    const requestSignUp = useRequestSignUp((state) => state.request);
    const signUp = useRequestSignUp((state) => state.signUp);
    const setRequestSignUp = useRequestSignUp((state) => state.setRequestSignUp);
    const loadingRequestSignUp = useRequestSignUp((state) => state.loading);
    // const authorizedSignUp = useRequestSignUp((state) => state.authorized);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("register", token)
        getAccess(token);
    }, []);

    useEffect(() => {
        if(authorized) navigate("/dashboard");
    }, [authorized]);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [isSignIn]);

    useEffect(() => {
        const req = {
            email: emailInput,
            password: passwordInput,
        }
        if(isSignIn) setRequestSignIn(req);
        else setRequestSignUp({ ...req, name: nameInput,  })
    }, [nameInput, emailInput, passwordInput])

    const handleSignIn = (requestSignIn) => {
        try {
            signIn(requestSignIn);
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleSignUp = (requestSignUp) => {
        try {
            signUp(requestSignUp);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <RegisterContainer>
            <SpinnerDefault loading={isLoading || loadingRequest || loadingRequestSignUp} />
            <RegisterBox>
                {isSignIn ? (
                    <SignIn 
                        showPassword={showPassword}
                        onShowPassword={() => setShowPassword(!showPassword)}
                        onChangeEmail={(event) => setEmailInput(event)}
                        onChangePassword={(event) => setPasswordInput(event)}
                        onSubmit={(() => handleSignIn(request))}
                    />
                ) : (
                    <SignUp
                        showPassword={showPassword}
                        onShowPassword={() => setShowPassword(!showPassword)}
                        onChangeName={(event) => setNameInput(event)}
                        onChangeEmail={(event) => setEmailInput(event)}
                        onChangePassword={(event) => setPasswordInput(event)}
                        onSubmit={(() => handleSignUp(requestSignUp))}
                    />
                )}
            </RegisterBox>
            <RegisterBoxImg>
                <MessageContainer>
                    <WellcomeMessage>Bem-vindo</WellcomeMessage>
                    <SubTextMessage>
                        {isSignIn ? (
                            <>
                                Ainda nao pussui cadastro? <br /> Registre-se
                                agora e crie seus cardápios fitness
                            </>
                        ) : (
                            <>
                                Já possui uma conta? <br /> Insira suas
                                credenciais para acessar sua conta.
                            </>
                        )}
                    </SubTextMessage>

                    <Button onClick={() => setIsSignIn(!isSignIn)}>
                        {isSignIn ? "Registrar" : "Login"}
                    </Button>
                </MessageContainer>
            </RegisterBoxImg>
        </RegisterContainer>
    );
};

export default Register;
