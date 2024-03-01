import { useMutation } from "react-query";
import {post} from "./api";



const signIn = async (username, password) => {
    const response = await post('/auth', { name: username, password: password });
    return response;
};

export const useSignIn = () => {
    return useMutation(({ username, password }) => signIn(username, password),
        {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        });
}

const signUp = async (username, email, password) => {
    return {
        id: 1,

    }
};

export const useSignUp = () => {
    return useMutation(({ username, email, password }) => signUp(username, email, password),
        {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        });
}

const signOut = async () => {
    return true;
}
export const useSignOut = () => {
    return useMutation(() => signOut(),
        {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        });
}