import { Tabs } from "expo-router";
import { Text } from "react-native-paper";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useSession } from "../../ctx";

import { router } from "expo-router";


export default function AuthLayout() {

    const { session } = useSession();

    return (
        <Tabs screenOptions={{
            headerShown: true,
            headerLeft: () => <Text>Welcome e {session.user?.username}</Text>,
            headerBackgroundColor: "blue",
        }}>
            <Tabs.Screen name="home"
                options={{
                    title: "Home",
                    href: "home",
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="planet-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen name="add"
                options={{
                    title: "Add",
                    href: "add",
                    headerShown: true,
                    headerLeft: () => <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color="black"
                        onPress={() => router.back()} />,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline"
                            color={color}
                            size={size} />
                    ),

                }}
            />
        </Tabs>
    )
}