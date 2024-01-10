
import { useController } from "react-hook-form"
import { TextInput } from "react-native-paper";

export const FormPassword = ({ label, control, name, error, ...rest }) => {

    const { field: { onChange, value } } = useController({
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
                error={error}
                secureTextEntry
                right={<TextInput.Icon name="eye" />}
                {...rest}
            />
        </>
    )
}