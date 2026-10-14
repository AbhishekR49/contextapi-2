import { apiClient } from "./apiClient";

export async function getUser() {
    const res = await apiClient('/users');
    return res.users;
}

export async function getUserbyId(id) {  
   return apiClient(`/users/${id}`);
}