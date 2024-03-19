import { useQuery } from "react-query";
import { get } from "./api"



const mock = [
    {
        "id": "65df71155d6825576dba5987",
        "request": "65df6d5157b41fec4d7c306a",
        "user": {
            "id": "65df6b13361416c5d583c170",
            "name": "frecape+test3"
        },
        "field1": "Pandore abusée",
        "field2": "Peter F.Hamilton",
        "field3": "undefined",
        "created_at": "2024-02-28T17:44:53.519Z",
        "likes": 1,
        "liked": true
    },
    {
        "id": "65df71155d6825576dba5984",
        "request": "65df6d5157b41fec4d7c306a",
        "user": {
            "id": "65df6b13361416c5d583c170",
            "name": "frecape+test3"
        },
        "field1": "Pandore abusée",
        "field2": "Peter F.Hamilton",
        "field3": "undefined",
        "created_at": "2024-02-28T17:44:53.519Z",
        "likes": 1,
        "liked": true
    }
]

const getRecommendations = async (requestId) => {
    // const response = await get(`/requests/${requestId}/recommendations`);
    // return response;

    return mock;
}


export const useGetRecommendations = (requestId) => {
    return useQuery(['requests', requestId, 'recommendations'],
        () => getRecommendations(requestId));
}

