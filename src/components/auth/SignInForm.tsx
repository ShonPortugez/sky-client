import { useForm } from "react-hook-form";
import { signInSchema, type SignInSchema } from "../../schemas/auth.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { apiRequests } from "../../lib/api.ts";
import { useNavigate } from "react-router-dom";
import {AuthFormLayout} from "./AuthFormLayout.tsx";
import Box from "@mui/material/Box";
import {ROUTES} from "../../routes/paths.ts";

const SignInForm = () => {
    const navigate = useNavigate();

    const {
    } = useForm<SignInSchema>({
        mode: 'all',
        resolver: zodResolver(signInSchema)
    })

    const onSubmit = async (data: SignInSchema) => {
        try {
            const success = await apiRequests.auth.login(data);

            if (!success) {
                toast.error("Login failed");
                return;
            }

            toast.success("Login successful");
            navigate(`/${ROUTES.SURVEYS}`);
        } catch (err) {
            const message = err instanceof Error ? err.message : "An unexpected error occurred";
            console.error(err);
            toast.error(message);
        }
    };

    const signInFields = [
        { name: 'email', label: 'Email', 'type': 'email', required: true },
        { name: 'password', label: 'Password', 'type': 'password', required: true },
    ] as const;


    return (
        <Box sx={{ width: '100%' }}>
            <AuthFormLayout
                title={'Sign in'}
                fields={signInFields}
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={onSubmit}
            />
        </Box>
    );
};

export default SignInForm;