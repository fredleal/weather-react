import axios from "axios";

export const api = axios.create({
    baseURL: "https://goweather.herouapp.com/weather"
})