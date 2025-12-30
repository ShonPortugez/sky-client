import axios from 'axios';
import type {UserAuthRequest} from "../types/auth.types.ts";
import type {UserSignupData} from "../types/user.types.ts";

const api = axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:8080',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
});

export const apiRequests = {
    auth: {
        async login(authRequest: UserAuthRequest)  {
            const response = await api.post('/auth/login', authRequest);
            return response.status === 200;
        },
    },
    users: {
        async signup(signupRequest: UserSignupData) {
            const response = await api.post('users/', signupRequest);
            return response.status === 200;
        }
    }
};
