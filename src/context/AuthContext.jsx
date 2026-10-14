import { createContext, useContext, useState } from "react";
import { getProfile, loginUser, refreshAccessToken} from "../services/authService";
import {setAccessToken as saveAccessToken, clearAccessToken} from "../services/tokenManager";


const AuthContext = createContext();

export function AuthProvider ({children}){

    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading ] = useState(false);

    async function login(credientials){
        const data = await loginUser(credientials);

        saveAccessToken(data.accessToken);

        const profileData = await getProfile();
        console.log(profileData.user);
        
        setUser(profileData.user);
    }

    async function testRefresh() {
        const data = await refreshAccessToken();

        console.log("new access Token", data.accessToken);

        saveAccessToken(data.accessToken);
    }

    function logout(){
        setUser(null);
        clearAccessToken();
    }

    function validate(email,password){
        const newError = {};

        if(! email.trim()){
            newError.email = "Email is required"
        }
        if(! password.trim()){
            newError.password = "Password is required";
        }

        return newError;
    }

    return(
        <AuthContext.Provider value={{user,login, logout, authLoading, testRefresh, validate}} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}