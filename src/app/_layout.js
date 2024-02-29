import { Slot, Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { lightTheme } from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "../ctx";


const queryClient = new QueryClient();

export default function HomeLayout() {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={lightTheme}>
                <SessionProvider>
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
                        
                            <Stack.Screen name="verify-token" options={{
                                headerShown: true,
                                headerTitle: "Verify Token",
                                title: "Verify Token"
                            }} />
                            <Stack.Screen name="(app)" options={{
                                headerShown: false,
                                headerTitle: "Home",
                                title: "Home"
                            }} />
                        </Stack>
                    </QueryClientProvider>
                </SessionProvider>
            </PaperProvider>
        </SafeAreaProvider>
    )
}