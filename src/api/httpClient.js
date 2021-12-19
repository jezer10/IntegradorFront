import axios from "axios";

const httpClient = axios.create({
    baseURL:"https://oiam-node.herokuapp.com",
    timeout:"2000"
})


export default httpClient
