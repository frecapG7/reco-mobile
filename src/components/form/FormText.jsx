import { useController } from "react-hook-form"
import { StyleSheet, View } from "react-native";
import { HelperText, TextInput, useTheme } from "react-native-paper";
import { errorMessage } from "../../utils/errors";




export const FormText = ({ label, control, name, disabled, ...rest }) => {

    const {
        field: { onChange, value },
        fieldState: { error },
        formState: { isSubmitting}
    } = useController({
        name,
        defaultValue: '',
        rules: { required: true },
        control
    });


    return (
        <>
            <TextInput
                label={label}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                disabled={disabled || isSubmitting}
                {...rest}
            />
            <HelperText type="error" visible={!!error}>
                {errorMessage(error)}
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