import {z} from "zod";

export const signUpSchema  = z.object({
    username: z.string().min(2, { message: 'Required'}),
    email: z.email().min(2, { message: 'Required'}),
    password: z.string().min(2, { message: 'Required'}),
    repeatPassword: z.string().min(2, { message: 'Required'}),
}).refine(
    (data) => data.password === data.repeatPassword,
    {
        message: 'Passwords do not match',
        path: ['repeatPassword'],
    }
);

export const signInSchema = z.object({
    email: z.email().min(2, { message: 'Required'}),
    password: z.string().min(2, { message: 'Required'}),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
export type SignInSchema = z .infer<typeof signInSchema>