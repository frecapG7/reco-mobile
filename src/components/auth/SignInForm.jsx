import { StyleSheet, View } from "react-native";
import { FormText } from "../form/FormText";
import { FormPassword } from "../form/FormPassword";
import { Button } from "react-native-paper";
import { useForm } from "react-hook-form";

export const SignInForm = ({ onSubmit }) => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
        {/* <View style={styles.container}> */}
                <FormText
                    label="Email"
                    name="email"
                    control={control}
                    error={errors.email}
                />
                <FormPassword
                    label="Password"
                    name="password"
                    control={control}
                    error={errors.password}
                />
                <Button
                    mode="contained"
                    onPress={handleSubmit(onSubmit)}
                >
                    Submit
                </Button>
        {/* </View> */}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20


    }
});