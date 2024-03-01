import { Button, Surface, Text } from "react-native-paper";
import { Logo } from "../components/image/Logo";
import { StyleSheet, View } from "react-native";
import { useStyles } from "../hooks/style/styles";
import { SignUpForm } from "../components/user/SignUpForm";


export default function SignUpPage() {



    const { container, formContainer } = useStyles();


    return (
        <View style={container}>
            <Surface mode="elevated" style={formContainer}>
                <Logo />
                <Text variant="titleMedium"
                    style={styles.title}>
                    Sign Up
                </Text>
                <SignUpForm onSubmit={(data) => console.debug(data)} />
            </Surface>

        </View>
    );


}


const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    }
});