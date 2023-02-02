import http from './http'
export default new class AuthService {
    login(user) {
        return http.post(`/user/login`, user);
    }
    register(user) {
        return http.post(`/user/create`, user);
    }
    user() {
        return http.get(`user/info`);
    }
}