


const API_URL = "https://reco-back-979f321211cf.herokuapp.com";


export const get = async (path) => {

    try {
        const response = await fetch(url(path), {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (!response.ok)
            return handleError(response.status, data);
        return Promise.resolve(data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export const post = async (path, body) => {
    try {
        const response = await fetch(url(path), {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });
        let data;

        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json"))
            data = await response.json();


        if (!response.ok)
            return handleError(response.status, data);


        return Promise.resolve(data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}


export const put = async (path, body) => {
    try {
        const response = await fetch(url(path), {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });

        if (!response.ok)
            return handleError(response);

        const data = await response.json();

        return Promise.resolve(data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export const remove = async (path) => {
    try {
        const response = await fetch(url(path), {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        if (!response.ok)
            return handleError(response);

        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}



const url = (path) => {
    return `${API_URL}${path}`;
}


const handleError = (status, data) => {

    switch (status) {
        case 401:
            // Redirect to login
            break;
        default:
            break;
    }

    return Promise.reject({ status: status, error: data?.message });
}