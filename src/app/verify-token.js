import { View } from "react-native";
import { ActivityIndicator, Surface, Text } from "react-native-paper";
import { useStyles } from "../hooks/style/styles";
import { TokenForm } from "../components/user/SignUpForm";
import { Logo } from "../components/image/Logo";
import { useValidateToken } from "../hooks/api/useValidate";
import { useState } from "react";
import { set } from "react-hook-form";
import { router } from "expo-router";



export default function VerifyTokenPage() {

    const { container, formContainer } = useStyles();


    const validateToken = useValidateToken();


    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <View style={container}>
            <Surface style={formContainer}>
                <Logo />
                <TokenForm onSubmit={({ value }) => {
                    setErrorMessage(null);
                    validateToken.mutate(value, {
                        onSuccess: (data) => {
                            console.log(data);
                            router.push('/sign-up')

                        },
                        onError: (error) => {
                            if (error.status !== 500)
                                setErrorMessage('Invalid token');
                        }
                    });
                }} />
                <ActivityIndicator animating={validateToken.isLoading} size="large" />
                {
                    errorMessage &&
                    <Text variant="labelLarge"
                        color="error">
                        {errorMessage}
                    </Text>
                }

            </Surface>
        </View>
    );
}