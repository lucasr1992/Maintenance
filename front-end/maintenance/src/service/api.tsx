import axios from "axios";
import { parseCookies } from 'nookies'

const { 'maintenance.token': token } = parseCookies();

const api = axios.create({
    baseURL: "http://localhost:3001"

});


if(token){
    api.defaults.headers.Bearer = `${token}`;
}

export default api;


