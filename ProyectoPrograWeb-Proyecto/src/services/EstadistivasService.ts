import axios from "../services/axiosInstance";

export async  function getArriendosById(){
    const url = "http://localhost:3000/api/arriendos/info";

    const token= "" // aca va el token
    const {data} = await axios.get(url,{
        headers:{
            Authorization: `Bearer ${token}`
        },
    });
    return data.data;
}