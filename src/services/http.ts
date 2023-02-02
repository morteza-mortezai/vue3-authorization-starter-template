import axios from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

// add token on request
http.interceptors.request.use(function (config) {
    // read token from session storage
    const token = localStorage.getItem("token")
    if (token) {
        //set
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});
// when token is expired 
http.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status == 401) {
            console.log('invalid token')
            localStorage.removeItem('token')
        }
    }
);
export default http

