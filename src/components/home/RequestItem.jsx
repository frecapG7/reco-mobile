import { Surface, Text, useTheme } from "react-native-paper"
import { RequestCard } from "../request/RequestCard"
import { View } from "react-native"
import { useGetRecommendations } from "../../hooks/api/useRecommendations";
import PagerView from "react-native-pager-view";
import { RecommendationCard } from "../recommendation/RecommendationCard";
import { UserDetailsDialog } from "../user/UserDetailsDialog";




export const RequestItem = ({ request }) => {


    const {colors} = useTheme();
    const { data: recommendations, isLoading, isError } = useGetRecommendations(request.id);


    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            
            <Surface
                style={{
                    backgroundColor: 'orange',
                    flex: 2,
                    // padding: 20,
                    margin: 10,
                }}
                elevation={2}>
                <RequestCard request={request} />
            </Surface>
            <View style={{
                flex: 1,
                padding: 10,
                color: colors.primary
            }}>
                <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={10} orientation="horizontal">
                    {recommendations?.map((recommendation, index) => (
                        <View key={index}>
                            <RecommendationCard recommendation={recommendation} />
                        </View>
                    ))}
                </PagerView>
            </View>
        </View>

    )

}