import axios from "axios";

const httpClient = axios.create({
    baseURL:"https://oiam-node.herokuapp.com",
    
})


export default httpClient
