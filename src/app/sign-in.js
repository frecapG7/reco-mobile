import { useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";
import { Button, Divider, Surface, Text, useTheme } from "react-native-paper";
import { FormText } from "../components/form/FormText";
import { FormPassword } from "../components/form/FormPassword";
import { Link, router } from "expo-router";
import { useSignIn } from "../hooks/auth";
import { SignInForm } from "../components/auth/SignInForm";


export default function SignInPage() {



    const signIn = useSignIn();

    const { colors } = useTheme();
    const style = styles(colors);

    const onSubmit = (data) => {
        signIn.mutate(data, {
            onSuccess: (data) => router.replace("app/(app)/home")
        });
    }

    return (
        <View style={style.container}>
            <Surface mode="elevated"
                style={style.formContainer}>

                <Image style={style.icon} source={require('../../assets/icon.png')} />
                <SignInForm onSubmit={onSubmit} />
                <Divider />

                <Text variant="labelSmall"
                    style={styles.signUp}>Don't have an account ? <Link href="sign-up">SignUp</Link></Text>
            </Surface>
        </View>
    );
}



const styles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
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
        borderRadius: 25,
        borderColor: colors.primary,
        backgroundColor: colors.secondary

    },
    signUp: {
        marginTop: 16,
        alignSelf: 'flex-end',
    }
});