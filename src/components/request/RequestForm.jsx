import { useForm } from "react-hook-form"
import { FormText } from "../form/FormText";
import { Button, Divider, Surface, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { FormSegmentedButtons } from "../form/FormSegmentedButtons";

const RequestType = [
    {
        value: 'BOOK',
        label: 'Book',
        icon: 'book'
    },
    {
        value: 'MOVIE',
        label: 'Movie',
        icon: 'movie'
    },
    {
        value: 'MUSIC',
        label: 'Music',
        icon: 'music'
    }
]


export const RequestForm = ({ onSubmit }) => {


    const { control, handleSubmit } = useForm();

    return (
        <View style={{
            flex: 1,
            padding: 5
        }}>
            <FormText control={control}
                name="name"
                label="Name"
                rules={{
                    required: true
                }} />
            <FormText control={control}
                name="Description"
                // label="Description"

                placeholder="Enter request description ..."
                rules={{
                    required: false
                }}
                multiline
                style={styles.description} />

            <Divider />
            <Text variant="labelMedium">
                Request Type
            </Text>
            <FormSegmentedButtons control={control}
                name="requestType"
                label="Request Type"
                options={RequestType} />
            <Button mode='contained'
                onPress={handleSubmit(onSubmit)}
                style={styles.submit}>
                Add
            </Button>
        </View>
    )
}



const styles = StyleSheet.create({

    description: {
        flexGrow: 1,
        // height: 200
    },
    submit: {
        marginVertical: 50,
        backgroundColor: 'black'
    }
});