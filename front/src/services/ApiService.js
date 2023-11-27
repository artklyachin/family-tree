
export async function  ApiService(url, params={}) {
    const response = await fetch( `http://127.0.0.1:8000/api/${url}`, params);
    const data = await response.json()
    return data
}
//             const data = ApiService(`cards/1/`)
// import { A } from "../../services/ApiService"