import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { FormText } from "../form/FormText";
import { FormPassword } from "../form/FormPassword";
import { Button } from "react-native-paper";



export const TokenForm = ({ onSubmit }) => {
    const { control,
        handleSubmit,
        formState: { isValid } }
        = useForm();

    return (
        <>
            <FormText control={control}
                name="value"
                label="Token"
                rules={{
                    required: true,
                    pattern: "/^[0-9a-fA-F]{6}$/" // 6 characters
                }} />
            <Button mode="contained"
                disabled={!isValid}
                onPress={handleSubmit(onSubmit)}>
                Verify
            </Button>
        </>
    )
}


export const SignUpForm = (onSubmit) => {

    const { control, handleSubmit, watch } = useForm();

    const password = watch('password', '');

    return (
        <>
            <FormText
                name="username"
                label="Username"
                control={control}
                rules={{
                    required: true
                }} />
            <FormPassword
                name="password"
                label="Password"
                control={control}
                rules={{
                    required: true,
                    minLength: 8
                }} />
            <FormPassword
                name="confirmPassword"
                label="Confirm Password"
                control={control}
                rules={{
                    required: true,
                    minLength: 8,
                    validate: (value) => value === password || "The passwords do not match"
                }} />
            <Button mode="contained"
                onPress={handleSubmit(onSubmit)}>
                Submit
            </Button>
        </>
    )

}