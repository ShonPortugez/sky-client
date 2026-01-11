import { TextField, type TextFieldProps } from "@mui/material";
import { Controller, useFormContext, type RegisterOptions } from "react-hook-form";

type ControlledTextFieldProps = Omit<TextFieldProps, 'name'> & {
    name: string;
    rules?: RegisterOptions;
};

const ControlledTextField = ({ name, rules, ...props }: ControlledTextFieldProps) => {
    const { control } = useFormContext();


    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
                <TextField
                    {...field}
                    {...props}
                    value={value ?? ''}
                    onChange={(e) => {
                        const rawValue = e.target.value;

                        const nextValue =
                            props.type === 'number'
                                ? rawValue === '' ? '' : Number(rawValue)
                                : rawValue;

                        onChange(nextValue);
                        props.onChange?.(e);
                    }}
                    error={!!error}
                    helperText={error?.message || props.helperText}
                />
            )}
        />
    );
};

export default ControlledTextField;
