import { useMutation } from "react-query";



const signIn = async (username, password) => {
    console.log("sign in");
    return {
        token: "1234567890",
        user: {
            id: 1,
            username: "test",
            email: "test",
        }
    }
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