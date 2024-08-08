import {LOCAL_SERVER_PATH} from "../Config";
export async function ApiService(url, params = {}) {

    let refreshToken = window.localStorage.getItem("refresh");
    let accessToken = window.localStorage.getItem("access");
    const newParams = {
        ...params
    };
    if (newParams["headers"] === undefined) {
        newParams.headers = {}
    }
    if (accessToken) {
        newParams.headers.Authorization = `Bearer ${accessToken}`;
    }
    const response = await fetch(`${LOCAL_SERVER_PATH}/api/${url}`, newParams);
    let data = null;

    if (response.status === 401 && refreshToken) {
        await RefreshToken();

        accessToken = window.localStorage.getItem("access");
        newParams.headers.Authorization = `Bearer ${accessToken}`;
        const newresponse = await fetch(`${LOCAL_SERVER_PATH}/api/${url}`, newParams);
        data = await newresponse.json();
    } else if (response.status === 204) { // Ok but no content
        return {};
    } else{
        data = await response.json();
    }
    return data;

}
export async function RefreshToken() {
    const refreshToken = window.localStorage.getItem("refresh");
    const refreshData = await fetch(
        `${LOCAL_SERVER_PATH}/api/token/refresh/`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh: refreshToken,
            }),
        }
    );
    let data = await refreshData.json();
    if (refreshData.status === 401) {
        await Logout();
    } else {
        window.localStorage.setItem("access", data.access);
    }
}

// export async function CheckToken() {
//     const refreshToken = window.localStorage.getItem("refresh");
//     const accessToken = window.localStorage.getItem("access");
//     const params = {header: {}};
//     if (accessToken) {
//         params.headers.Authorization = `Bearer ${accessToken}`;
//     }
// }

export function IsAuthorized() {
    return (window.localStorage.getItem('access') ? 1 : 0);
}

export function Logout() {
    window.localStorage.removeItem("access")
    window.localStorage.removeItem("refresh")
}