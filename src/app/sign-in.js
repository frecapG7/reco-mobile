import {  StyleSheet, View } from "react-native";
import {  Divider, Surface, Text } from "react-native-paper";
import { Link, router } from "expo-router";
import { useSignIn } from "../hooks/api/useAuth";
import { SignInForm } from "../components/auth/SignInForm";
import { Logo } from "../components/image/Logo";
import { useStyles } from "../hooks/style/styles";
import { useSession } from "../ctx";
import { useState } from "react";


export default function SignInPage() {



    const signIn = useSignIn();
    const {signIn: login } = useSession();

    const {container, formContainer} = useStyles();

    const [errorMessage, setErrorMessage] = useState(null);


    const onSubmit = (data) => {

        signIn.mutate(data, {
            onSuccess: (data) => {
                login(data);
                router.replace("(app)/home");
            },
            onError: (error) => {
                if(error.status !== 500)
                    setErrorMessage(error?.message);
            }
        });
    }

    return (
        <View style={container}>
            <Surface mode="elevated"
                style={formContainer}>

                <Logo />
                <SignInForm onSubmit={onSubmit} />
                <Divider />

                {errorMessage && <Text variant="labelLarge" color="error">{errorMessage}</Text>}

                <Text variant="labelSmall"
                    style={styles.signUp}>Don't have an account ? <Link href="verify-token">SignUp</Link></Text>
            </Surface>
        </View>
    );
}


const styles = StyleSheet.create({
    signUp: {
        marginTop: 16,
        alignSelf: 'flex-end',
    }
});
