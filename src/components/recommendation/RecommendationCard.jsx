import { Avatar, Card, Text, useTheme } from "react-native-paper";
import { UserDetailsDialog } from "../user/UserDetailsDialog";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useStyles } from "../../hooks/style/styles";



export const RecommendationCard = ({ recommendation }) => {


    const [showUserDetails, setShowUserDetails] = useState(false);

    const { card} = useStyles();
    const { colors } = useTheme();

    return (
        <Card style={card}>
            <Card.Title title={recommendation.user.name}
                left={(props) =>
                    <Ionicons
                        name="person-circle-outline"
                        size={24}
                        color="black"
                        onPress={() => setShowUserDetails(true)} />
                }
                onPress={() => console.log('Pressed')}
            />
            <Card.Content>
                <Text>
                    {recommendation.field1}
                </Text>
                <Text>
                    {recommendation.field2}
                </Text>
            </Card.Content>
            <Card.Actions>
                <Ionicons
                    name={recommendation.liked ? "heart" : "heart-outline"}
                    size={24}
                    color={colors.primary}
                    onPress={() => console.log('Pressed')} />
                <Ionicons
                    name="save-outline"
                    size={24}
                    color={colors.primary}
                    onPress={() => console.log('Pressed')} />
                <Ionicons
                    name="share-outline"
                    size={24}
                    color={colors.primary}
                    onPress={() => console.log('Pressed')} />

            </Card.Actions>

            <UserDetailsDialog open={showUserDetails}
                onClose={() => setShowUserDetails(false)}
                user={recommendation.user} />
        </Card>
    )
};

