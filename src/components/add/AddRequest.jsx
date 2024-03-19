import { StyleSheet, View } from 'react-native';
import { useStyles } from '../../hooks/style/styles';
import { RequestForm } from '../request/RequestForm';
import { Button, Surface, Text } from 'react-native-paper';


export const AddRequest = () => {

    const {container2} = useStyles();

    return (
        <View style={container2}>
            {/* <View style={styles.body}> */}
                <RequestForm />
            {/* </View> */}
        </View>
    )

}



const styles = StyleSheet.create({
    header: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4,
        paddingTop: 30,
    },
    body: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: 'blue'
    },
    add: {
        margin: 10
    }
});