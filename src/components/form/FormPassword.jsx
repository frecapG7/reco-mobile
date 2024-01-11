
import { useState } from "react";
import { useController } from "react-hook-form"
import { StyleSheet } from "react-native";
import { HelperText, TextInput, useTheme } from "react-native-paper";

export const FormPassword = ({ label, control, name, error, ...rest }) => {

    const { field: { onChange, value } } = useController({
        name,
        defaultValue: '',
        rules: { required: true },
        control
    });


    const { input } = useTheme();

    const styles = StyleSheet.create(input);

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <TextInput
                label={label}
                onChangeText={onChange}
                value={value}
                secureTextEntry={!showPassword}
                right={() => <TextInput.Icon name="eye" />}
                {...rest}
                style={styles.text}
            />
            <HelperText type="error" visible={!!error}>
                {JSON.stringify(error?.message)}
            </HelperText>
        </>
    )
}