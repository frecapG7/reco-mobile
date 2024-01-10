import { Redirect, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";


export default function HomePage() {


    const [ready, setReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hideAsync();
            setReady(true);
        })
    }, [setReady]);

    return (
       <Redirect href="/sign-in" />
    )
}