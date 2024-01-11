import { useController } from "react-hook-form"
import { StyleSheet, View } from "react-native";
import { HelperText, TextInput, useTheme } from "react-native-paper";




export const FormText = ({ label, control, name, error, ...rest }) => {

    const { field: { onChange, value } } = useController({
        name,
        defaultValue: '',
        rules: { required: true },
        control
    });

    const { input } = useTheme();

    const styles = StyleSheet.create(input);


    return (
        <>
            <TextInput
                label={label}
                onChangeText={onChange}
                value={value}
                {...rest}
                style={styles.text}
            />
            <HelperText type="error" visible={!!error}>
                {error?.message}
            </HelperText>
        </>
    )
}

const styles = StyleSheet.create({

    input: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 5,
    }
});