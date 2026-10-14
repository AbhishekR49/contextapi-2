import { getAccessToken, setAccessToken } from "./tokenManager";
const BASE_URL = import.meta.env.VITE_API_URL;

export async function apiClient(endpoint, options={}) {

   const {token, ...fetchOptions} = options;
   
   const accessToken = token || getAccessToken();

    const response = await fetch(`${BASE_URL}${endpoint}`,{
        ...fetchOptions,

        credentials:"include",

        headers:{
            "Content-type":"application/json",
            ...(accessToken&&{
                Authorization:`Bearer ${accessToken}`
            }),
            ...fetchOptions.headers,
        }
    });

    if(response.status === 401){

        const refreshResponse = await fetch(`${BASE_URL}/user/refresh`,{
            method:'POST',
            credentials:'include'
        });
        if(!refreshResponse.ok){
            throw new Error("session is expired please log in again");
        }

        const refreshData = await refreshResponse.json();

        setAccessToken(refreshData.accessToken);

        const retryResponse = await fetch(`${BASE_URL}${endpoint}`,{
            ...fetchOptions,

            credentials:'include',

            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${refreshData.accessToken}`,

                ...fetchOptions.headers,
            }
        });

        if(!retryResponse.ok){
            const errorData = await retryResponse.json();
            throw new Error(
                errorData.message || `Failed to fetch ${retryResponse.status}`
            );
        }

        return retryResponse.json();
    }

    
     
     if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
            errorData.message || `Failed to fetch ${response.status}`
        );
    }

    return response.json();
} 

