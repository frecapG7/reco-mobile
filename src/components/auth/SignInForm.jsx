import { StyleSheet, View } from "react-native";
import { FormText } from "../form/FormText";
import { FormPassword } from "../form/FormPassword";
import { Button } from "react-native-paper";
import { useForm } from "react-hook-form";


export const SignInForm = ({ onSubmit }) => {

    const { control, handleSubmit } = useForm();

    return (
        <>
            <FormText
                label="Username"
                name="username"
                control={control}
                rules={{
                    required: true
                }}
            />
            <FormPassword
                label="Password"
                name="password"
                control={control}
            />
            <Button
                mode="contained"
                onPress={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
        </>
    )
}
