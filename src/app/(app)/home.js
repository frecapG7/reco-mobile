import { ActivityIndicator, Surface, Text } from "react-native-paper";
import { useStyles } from "../../hooks/style/styles";
import { StyleSheet, View } from "react-native";
import { HomeContainer } from "../../components/home/HomeContainer";

export default function HomePage() {


    const { container, formContainer } = useStyles();
    return (
        <View style={container}>
            <HomeContainer />
        </View>

    );
}

const styles = StyleSheet.create({
    requestSurface: {
        flex: 1,
        border: '1px solid black',

    }
});



