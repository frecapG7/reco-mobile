import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";


export const useStyles = () => {
    const { colors } = useTheme();

    return styles(colors);

}


const styles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    formContainer: {
        width: '80%',
        padding: 16,
        elevation: 4,
        borderRadius: 25,
        borderColor: colors.primary,
        backgroundColor: colors.secondary

    }
});