import { API_HOST } from 'utils/constants'
import axios from 'axios';

export const registerUser = (data) => {
    return axios({
        method: "POST",
        url: API_HOST + "/register",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    });
};