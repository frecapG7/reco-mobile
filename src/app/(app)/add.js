import { View } from "react-native";
import { Text } from "react-native-paper";
import { AddRequest } from "../../components/add/AddRequest";
import { useStyles } from "../../hooks/style/styles";

export default function AddPage() {


    const {container} = useStyles()

    return (
        <View style={{
            flex: 1,
        }}>
            <AddRequest />
        </View>
    )
}