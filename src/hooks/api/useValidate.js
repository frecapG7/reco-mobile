import { useMutation } from "react-query";
import { post } from "./api"



const validateToken = async (token) => {
    const response = await post('/validate/token', { value: token });
    return response;
}


export const useValidateToken = () => {
    return useMutation((token) => validateToken(token));
}


const validateEmail = async (email) => {
    const response = await post('/validate/email', { value: email });
    return response;
}

export const useValidateEmail = () => {
    return useMutation((email) => validateEmail(email));
}

const validateUsername = async (username) => {
    const response = await post('/validate/username', { value: username });
    return response;
}

export const useValidateUsername = () => {
    return useMutation((username) => validateUsername(username));
}

