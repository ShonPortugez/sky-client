import {z} from "zod";

export const signUpSchema  = z.object({
    username: z.string().min(2, { message: 'Username must be more than 2 characters' }),
    email: z.email().min(2, { message: 'Email must be more than 2 characters' }),
    password: z.string().min(2, { message: 'Password must be more than 2 characters' }),
    repeatPassword: z.string().min(2, { message: 'Password must be more than 2 characters'}),
}).refine(
    (data) => data.password === data.repeatPassword,
    {
        message: 'Passwords do not match',
        path: ['repeatPassword'],
    }
);

export const signInSchema = z.object({
    email: z.email().min(2, { message: 'Email must be more than 2 characters'}),
    password: z.string().min(2, { message: 'Password must be more than 2 characters'}),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
export type SignInSchema = z .infer<typeof signInSchema>