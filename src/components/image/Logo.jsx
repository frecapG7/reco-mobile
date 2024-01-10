import { Image, StyleSheet } from 'react-native';


export const Logo = ({ style }) => {
    return (
        <Image source={require('../../../assets/icon.png')} style={styles.logo} />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20
    }
});
