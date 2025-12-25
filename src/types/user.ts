export interface User {
    id?: string;
    username: string;
    email: string;
}

export interface UserRegisterDto extends User {
    password: string;
}