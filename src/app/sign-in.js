import { useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";
import { Button, Divider, Surface, Text, useTheme } from "react-native-paper";
import { FormText } from "../components/form/FormText";
import { FormPassword } from "../components/form/FormPassword";
import { Link } from "expo-router";


export default function SignInPage() {


    const { control, handleSubmit, errors } = useForm();

    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <Surface mode="elevated"
                style={[styles.formContainer,
                {
                    backgroundColor: theme?.colors.surface
                }
                ]}>

                <Image style={styles.icon} source={require('../../assets/icon.png')} />

                <FormText name="username" label="Username" control={control} errors={errors} />
                <FormPassword name="password" label="Password" control={control} errors={errors} />


                <Button mode="contained" onPress={() => console.log("Pressed")}>
                    Submit
                </Button>

                <Divider />

                <Text variant="labelSmall">Don't have an account ? <Link href="sign-up">SignUp</Link></Text>
            </Surface>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 32,
    },
    formContainer: {
        width: '80%',
        padding: 16,
        elevation: 4,
        gap: 10,
    },
});