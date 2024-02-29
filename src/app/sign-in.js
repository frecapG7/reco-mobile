import {  StyleSheet, View } from "react-native";
import {  Divider, Surface, Text } from "react-native-paper";
import { Link, router } from "expo-router";
import { useSignIn } from "../hooks/auth";
import { SignInForm } from "../components/auth/SignInForm";
import { Logo } from "../components/image/Logo";
import { useStyles } from "../hooks/style/styles";
import { useSession } from "../ctx";


export default function SignInPage() {



    const signIn = useSignIn();
    const {signIn: login } = useSession();

    const {container, formContainer} = useStyles();


    const onSubmit = (data) => {

        signIn.mutate(data, {
            
            onSuccess: (data) => {
                router.replace("(app)/home");
                login(data);
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
