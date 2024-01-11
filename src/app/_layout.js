import { Slot, Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lightTheme } from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

export default function HomeLayout() {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={lightTheme}>
                <QueryClientProvider client={queryClient}>
                    <Stack screenOptions={{
                        headerShown: true,
                        title: "Reco"
                    }}>
                        <Stack.Screen name="sign-in" options={{
                            headerShown: true,
                            headerTitle: "Sign In",
                            title: "Sign In"
                        }} />
                        <Stack.Screen name="sign-up" options={{
                            headerShown: true,
                            headerTitle: "Sign Up",
                            title: "Sign Up"
                        }} />
                    </Stack>
                </QueryClientProvider>
            </PaperProvider>
        </SafeAreaProvider>
    )
}