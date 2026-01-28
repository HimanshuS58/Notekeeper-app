import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "https://notekeeper-app-t4qw.onrender.com"
})

export default BACKEND_URL;
