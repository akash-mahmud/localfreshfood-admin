import axios from "axios";
import { api } from "../config/api";

const axiosRequest = axios.create({
    baseURL: api,
    withCredentials:true
})


export default axiosRequest;