
import {
    MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ddb5e3',
        secondary: '#fccfd8',
        accent: '#ffffff',
        background: '#ffffff',
        surface: '#ffffff',
        text: '#000000',
        disabled: '#000000',
        placeholder: '#000000',
        backdrop: '#000000',
        onSurface: '#000000',
        notification: '#000000',
    },
    input: {
        text: {
            marginBottom: 5,
            borderColor: '#000000',
            padding: 5,
            borderRadius: 5,
        }
    }
};


const darkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ffffff',
        accent: '#000000',
        background: '#000000',
        surface: '#000000',
        text: '#ffffff',
        disabled: '#ffffff',
        placeholder: '#ffffff',
        backdrop: '#ffffff',
        onSurface: '#ffffff',
        notification: '#ffffff',
    },
};

export {
    lightTheme,
    darkTheme,
};
