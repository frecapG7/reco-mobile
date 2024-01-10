import { useController } from "react-hook-form"
import { View } from "react-native";
import { TextInput } from "react-native-paper";




export const FormText = ({ label, control,  name, error, ...rest }) => {

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
                {...rest}
            />
        </>
    )
}