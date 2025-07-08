import axios from "../services/axiosInstance";

export async  function getArriendosById(){
    const url = "http://localhost:3000/api/arriendos/info";

    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyN0BnbWFpbC5jb20iLCJpYXQiOjE3NTE4MzgxNDksImV4cCI6MTc1MTg0MTc0OX0.r3XNdElhUCy933qhnOEGGFyraAETu6U6rNYDFYLQxCs" // aca va el token
    const {data} = await axios.get(url,{
        headers:{
            Authorization: `Bearer ${token}`
        },
    });
    return data.data;
}