import { useController } from "react-hook-form"
import { StyleSheet, View } from "react-native";
import { HelperText, TextInput, useTheme } from "react-native-paper";
import {i18nError} from '../../utils/formUtils';



export const FormText = ({ label,
    control,
    name,
    disabled,
    multiline = false,
    placeholder,
    ...rest }) => {

    const {
        field: { onChange, value },
        fieldState: { error },
        formState: { isSubmitting }
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
                // style={styles.input}
                disabled={disabled || isSubmitting}
                multiline={multiline}
                mode="outlined"
                placeholder={placeholder}
                {...rest}
            />
            <HelperText type="error" visible={!!error}>
                {i18nError(error)}
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