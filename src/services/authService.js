import { apiClient } from "./apiClient";

export async function loginUser(credentials) {
    return apiClient('/user/login',{
        method:'POST',
        body: JSON.stringify(credentials),
    });
   
}

export async function getProfile(){
     return apiClient('/user/profile');
}

export async function refreshAccessToken() {

    return apiClient('/user/refresh',{
        method:"POST"
    });
    
}