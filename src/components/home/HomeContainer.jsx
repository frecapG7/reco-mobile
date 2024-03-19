import { ActivityIndicator, Surface, Text } from "react-native-paper"
import { useGetRequests } from "../../hooks/api/useRequests";
import PagerView from "react-native-pager-view";
import { RequestCard } from "../request/RequestCard";
import { StyleSheet, View } from "react-native";
import { RequestItem } from "./RequestItem";


export const HomeContainer = ({ }) => {


    const { data: resultSet, isLoading, isError } = useGetRequests(0, 10);

    if (isLoading)
        return (
            <Surface elevation={1}>
                <ActivityIndicator size="large" color="black" />
            </Surface>
        );


    if (isError) {
        return (
            <Surface elevation={1}>
                <Text>Error : 1</Text>
            </Surface>
        );
    }

    return (
        <Surface elevation={1}
                style={styles.surfaceContainer}>
            <PagerView
                style={{ flex: 1 }}
                initialPage={0}
                pageMargin={10}
                orientation="vertical">
                {resultSet.results?.map((request, index) => (
                    <View key={index}>
                        <RequestItem request={request} />
                    </View>
                ))}
            </PagerView>
        </Surface>
    )
}


const styles = StyleSheet.create({
    surfaceContainer: {
        height: '100%',
        width: '100%',
    },
    mainContainer: {
        flex: 2,
        marginBottom: 10,
    },
    secondContainer: {
        flex: 1,
        marginTop: 10,
    },
})  