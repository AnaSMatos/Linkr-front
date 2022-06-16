import React, { createContext, useState } from 'react';
import axios from "axios";

export const UserDataContexts = createContext({});

export const AuthenticationProvider = ({ children }) => {
    const [ signUp, setSignUp ] = useState({
        name: "",
        email: "",
        password: "",
        image: ""
    })
    const [ signUpSuccess, setSignUpSuccess ] = useState(false);
    const [ infosLogin, setInfosLogin ] = useState({
        email: "", 
        password: ""
    });
    const [ userInfos, setUserInfos ] = useState({}); // O TOKEN ESTÁ AQUI
    const [ signInSuccess, setSignInSuccess ] = useState(false)
    
    const postSignUp = (signUp, e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/sign-up", signUp)
        .then(() => setSignUpSuccess(true))
        .catch((e) => window.alert(e.response.data.message))
    }

    const postSignIn = (infosLogin, e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/", infosLogin)
        .then((answer) => {
            localStorage.setItem("user", JSON.stringify({
                name: answer.data.name,
                token: answer.data.token,
            }));
            setSignInSuccess(true);
            setUserInfos(answer.data);
        })
        .catch((e) => window.alert(e.response.data.message));
    }
    
    return (
        <UserDataContexts.Provider
            value = {{
                signUp,
                setSignUp,
                signUpSuccess,
                postSignUp,
                infosLogin,
                setInfosLogin,
                signInSuccess,
                postSignIn,
                userInfos
            }}
        >
            { children }
        </UserDataContexts.Provider>
    )
}