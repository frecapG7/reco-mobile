import { Button, Dialog, Portal, Text } from "react-native-paper";



export const UserDetailsDialog = ({ user, open, onClose }) => {

    return (
        <Portal>
            <Dialog visible={open} onDismiss={onClose}>
                <Dialog.Title>{user.name}</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">{user.name}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={onClose}>Close</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>

    )
};