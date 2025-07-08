import axios from "../services/axiosInstance";

export async function getArriendosTerminados() {
  const url = "http://localhost:3000/api/arriendos/terminados";


  const token = ""; 

  const { data } = await axios.get(url, {
    headers: token
      ? { Authorization: `Bearer ${token}` }
      : undefined,
  });

  return data; 
}

