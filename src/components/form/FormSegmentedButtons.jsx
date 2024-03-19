import { useController } from "react-hook-form"
import { View } from "react-native"
import { SegmentedButtons } from "react-native-paper";


export const FormSegmentedButtons = ({ control,
    name,
    label,
    disabled,
    options = [],
    rules }) => {




    const {
        field: { onChange, value },
        fieldState: { error },
        formState: { isSubmitting }
    } = useController({
        control,
        name,
        defaultValue: '',
        rules: { required: rules?.required },
    });

    return (



        <View>

            <SegmentedButtons
                value={value}
                density="regular"
                onValueChange={onChange}
                disabled={disabled || isSubmitting}
                buttons={options.map(option => (
                    {
                        label: option.label,
                        value: option.value,
                        icon: option.icon,
                        showSelectedCheck: true
                    }))}
            />

        </View>
    )

}