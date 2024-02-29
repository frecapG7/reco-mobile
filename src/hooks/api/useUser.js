import { useQuery } from "react-query";


const createUser = async (user, token) => {
    const response = await post(`/users?token=${token}`, user);
    return response;
}


export const useCreateUser = () => {
    return useMutation((user, token) => createUser(user, token));
}



const getUser = async (id) => {
    const response = await get(`/users/${id}`);
    return response;
}

export const useGetUser = (id) => {
    return useQuery(['users', id], () => getUser(id));
}