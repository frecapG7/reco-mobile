
import { useState } from "react";
import { useController } from "react-hook-form"
import { StyleSheet } from "react-native";
import { HelperText, TextInput, useTheme } from "react-native-paper";

export const FormPassword = ({ label, control, name, rules, ...rest }) => {

    const { field: { onChange, value },
        fieldState: { error }, } = useController({
            control,
            name,
            defaultValue: '',
            rules: { required: rules?.required },
        });
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <TextInput
                label={label}
                onChangeText={onChange}
                value={value}
                secureTextEntry={!showPassword}
                right={<TextInput.Icon name="eye" onPress={() => setShowPassword(!setShowPassword)} />}
                {...rest}
                style={styles.input}
            />
            <HelperText type="error" visible={!!error}>
                {JSON.stringify(error?.message)}
            </HelperText>
        </>
    )
}



const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    }
});