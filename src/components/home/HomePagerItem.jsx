import { Caption, Surface, Text, TouchableRipple } from "react-native-paper"
import { RequestCard } from "../request/RequestCard"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { useStyles } from "../../hooks/style/styles"
import { useGetRecommendations } from "../../hooks/api/useRecommendations"
import PagerView from "react-native-pager-view"






export const HomePagerItem = ({ request }) => {

    const { container } = useStyles();

    const { data: recommendations, isLoading, isError } = useGetRecommendations(request.id);


    return (
        <View style={styles.surfaceContainer}>
            <Surface elevation={1}
                style={styles.mainContainer}>
                <PagerView
                    orientation="horizontal"
                    style={{ flex: 1 }}
                    initialPage={0}>
                    {
                        recommendations?.map((recommendation, index) => (
                            <View key={index}>
                                <Caption>{recommendation.id}</Caption>
                                <Caption>Toto</Caption>
                            </View>
                        ))
                    }
                </PagerView>
            </Surface>
            <Surface
                elevation={2}
                style={styles.secondContainer}>
                <RequestCard request={request} />
            </Surface>
        </View >
    )
}


const styles = StyleSheet.create({
    surfaceContainer: {
        flexDirection: 'column',
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