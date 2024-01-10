import { Button, Surface, Text } from "react-native-paper";
import { Logo } from "../components/image/Logo";
import { StyleSheet, View } from "react-native";
import { FormText } from "../components/form/FormText";
import { FormPassword } from "../components/form/FormPassword";
import { useForm } from "react-hook-form";


export default function SignUpPage() {

    const { control, handleSubmit, errors } = useForm();

    return (
        <View style={styles.container}>
            <Surface style={styles.formContainer}>
                <Logo />
                <Text variant="titleMedium" style={styles.title}>Sign Up</Text>
                <FormText name="username" label="Username" control={control} errors={errors} />
                <FormPassword name="password" label="Password" control={control} errors={errors} />
                <FormPassword name="confirmPassword" label="Confirm Password" control={control} errors={errors} />
                <Button mode="contained" onPress={() => console.log("Pressed")}>
                    Submit
                </Button>

            </Surface>
        
        </View>
    );


}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    formContainer: {
        width: '80%',
        padding: 16,
        elevation: 4,
        gap: 10,
    },
    title:{
        textAlign: 'center',
    }
});