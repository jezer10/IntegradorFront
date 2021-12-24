import axios from "axios";

const httpClient = axios.create({
    baseURL:"https://oiam-node.herokuapp.com",
    /*baseURL:"http://localhost:3000"*/
})


export default httpClient
