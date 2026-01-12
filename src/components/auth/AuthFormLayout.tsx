import React, {useState} from 'react';
import {Button, CircularProgress, Stack, TextField} from "@mui/material";

export type FieldType = 'text' | 'email' | 'password';

export interface FieldConfig {
    name: string;
    label: string;
    type: FieldType;
    required?: boolean;
}

interface AuthFormLayoutProps<T extends Record<string, string>> {
    title: string;
    fields: readonly FieldConfig[]
    initialValues: T;
    onSubmit: (values: T) => void;
}

export const AuthFormLayout = <T extends Record<string, string>>(props: AuthFormLayoutProps<T>) => {
    const [values, setValues] = useState<T>(props.initialValues);
    const [isPending] = useState<boolean>(false);

    const onChange =
        (name: keyof T) =>
            (e: React.ChangeEvent<HTMLInputElement>) =>
                setValues({ ...values, [name]: e.target.value });

    return (
        <form onSubmit={(e) => { e.preventDefault(); props.onSubmit(values); }}>
            <Stack sx={{ gap: 2.5, py: 3 }}>
                {props.fields.map(f => (
                    <TextField
                        key={f.name}
                        label={f.label}
                        type={f.type}
                        required={f.required}
                        value={values[f.name as keyof T]}
                        onChange={onChange(f.name as keyof T)}
                    />
                ))}
            </Stack>

            <Button
                type={'submit'}
                variant={'contained'}
                color={'secondary'}
                disabled={isPending}
                sx={{ margin: '0 auto', display: 'block', width: '70%', }}
            >
                {isPending ? <CircularProgress size={20} color={'info'} /> : 'Continue'}
            </Button>
        </form>
    );
}
