import { useCallback, useEffect, useReducer, useState } from "react";
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

const useAsyncState = (initialValue) => {
    return useReducer((state, action), 
        initialValue
    )
}

export const setStorateItemAsync = async (key, value) => {
    if (Platform.OS === 'web') {
        try {
            if (value === null)
                localStorage.removeItem(key);
            else
                localStorage.setItem(key, value);
        } catch (e) {
            console.error('Local storage error ', e);
        }

    } else {
        if (value == null)
            await SecureStore.deleteItemAsync(key);
        else
            await SecureStore.setItemAsync(key, value);
    }
}


export const useStorageState = (key) => {
    // Public
    const [state, setState] = useState({});

    // Get
    useEffect(() => {
        if (Platform.OS === 'web') {
            try {
                if (typeof localStorage !== 'undefined')
                    setState(localStorage.getItem(key));
            } catch (e) {
                console.error('Local storage unavailable ', e);
            }
        } else
            SecureStore.getItemAsync(key)
                .then(value => setState(value));
    }, [key]);


    // Set
    const setValue = useCallback((value) => {
        setState(value);
        setStorateItemAsync(key, value);
    }, [key]);

    return [state, setValue];

}