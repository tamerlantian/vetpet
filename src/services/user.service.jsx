import axios from "axios";
import authHeader from "./auth-header";
import { BASE_URL } from "../config/config";

const API_URL = `${BASE_URL}/api/test/`;

const getHome = () => {
    return axios.get(API_URL + "user")
}