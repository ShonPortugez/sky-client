import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";
import { signUpSchema, type SignUpSchema} from "./auth.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod"
import {useNavigate} from "react-router-dom";
import {apiRequests} from "../../lib/api.ts";
import {toast} from "sonner";
import type {UserSignupData} from "../../types/user.types.ts";
import {AuthFormLayout} from "./AuthFormLayout.tsx";

const SignUpForm = () => {

    const navigate = useNavigate();

    const {
    } = useForm<SignUpSchema>({
        mode: 'all',
        resolver: zodResolver(signUpSchema)
    })

    const onSubmit = async (data: UserSignupData) => {
        try {
            const success = await apiRequests.users.signup(data);

            if (!success) {
                toast.error("Something went wrong");
                return;
            }

            toast.success("Signup Successful");
            navigate('/home');
        } catch (err) {
            const message = err instanceof Error ? err.message : "An unexpected error occurred";
            console.error(err);
            toast.error(message);
        }
    };

    const signInFields = [
        { name: 'email', label: 'Email', 'type': 'email', required: true },
        { name: 'username', label: 'Username', 'type': 'text', required: true },
        { name: 'password', label: 'Password', 'type': 'password', required: true },
        { name: 'repeatPassword', label: 'Password', 'type': 'password', required: true },
    ] as const;

    return (
        <Box sx={{ width: '100%' }}>
            <AuthFormLayout
                title={'Sign in'}
                fields={signInFields}
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
                onSubmit={onSubmit}
            />
        </Box>
    );
};

export default SignUpForm;