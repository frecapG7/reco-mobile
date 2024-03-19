import { Ionicons } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import { Avatar, Button, Caption, Card, IconButton, Text } from "react-native-paper"
import { formatDateTime } from "../../utils/utils"
import { UserDetailsDialog } from "../user/UserDetailsDialog"
import { useState } from "react"

export const RequestCard = ({ request }) => {


    const [showUserDetails, setShowUserDetails] = useState(false);

    return (
        <Card style={styles.card}
            mode="elevated">
            <Card.Title
                style={styles.title}
                title={request.author.name}
                subtitle={formatDateTime(new Date(request.created))}
                left={(props) => <Ionicons
                    name="person-circle-outline"
                    size={24}
                    color="black"
                    onPress={() => setShowUserDetails(true)}
                    {...props} />
                }
            />
            <Card.Content style={styles.content}>
                <Caption style={styles.description}>{request?.description} Lorem ipsum</Caption>
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <IconButton
                    icon="trash-can-outline"
                    color="black"
                    size={24}
                    onPress={() => console.log('Pressed')} />
                <IconButton
                    icon="heart-outline"
                    color="black"
                    size={24}
                    onPress={() => console.log('Pressed')} />
            </Card.Actions>
            <UserDetailsDialog open={showUserDetails} onClose={() => setShowUserDetails(false)} user={request.author} />
        </Card>
    )
}


const styles = StyleSheet.create({
    card: {
        // flex: 1,
        height: '100%',
    },
    title: {
        fontSize: 20
    },
    content: {
        // flex: 1,
        padding: 10,
        // fontSize: 16,
        height: 100,
        backgroundColor: 'white'
    },
    description: {
        flex: 1,
    },
    actions: {
        marginTop: 1,
        padding: 10,
    }
})