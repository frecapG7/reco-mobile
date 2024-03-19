
import { useQuery } from "react-query";
import {get} from "./api";



const mock = {
    "pagination": {
        "currentPage": 1,
        "totalPages": 1,
        "totalResults": 1
    },
    "results": [
        {
            "id": "65df6d5157b41fec4d7c306a",
            "requestType": "BOOK",
            "description": "#French #Horror #Fantastic",
            "status": "OPEN",
            "created": "2024-02-28T17:28:49.541Z",
            "author": {
                "id": "65df6cc757b41fec4d7c3055",
                "name": "user1",
            },
            "recommendationsCount": 0,
            "unseenRecommendationsCount": 0
        },
        {
            "id": "65df6d5157b41fec4d7c306a",
            "requestType": "BOOK",
            "description": "#French #Horror #Fantastic",
            "status": "OPEN",
            "created": "2024-02-28T17:28:49.541Z",
            "author": {
                "id": "65df6cc757b41fec4d7c3055",
                "name": "user1",
            },
            "recommendationsCount": 0,
            "unseenRecommendationsCount": 0
        },
        {
            "id": "65df6d5157b41fec4d7c306a",
            "requestType": "BOOK",
            "description": "#French #Horror #Fantastic",
            "status": "OPEN",
            "created": "2024-02-28T17:28:49.541Z",
            "author": "65df6cc757b41fec4d7c3055",
            "recommendationsCount": 0,
            "unseenRecommendationsCount": 0
        }
    ]
}

const getRequests = async (page , size ) => {
    return mock;
    // const response = await get(`/requests?pageNumber=${page}&pageSize=${size}`);
    // return response;
}

export const useGetRequests = (page, size) => {
    return useQuery(['requests', page, size], () => getRequests(page, size));
}


