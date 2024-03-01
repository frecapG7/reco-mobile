import { Tabs } from "expo-router";
import { Text } from "react-native-paper";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useSession } from "../../ctx";


export default function AuthLayout(){

    const {session} = useSession();

    return (
        <Tabs screenOptions={{
            headerShown: true,
            headerLeft: () => <Text>Welcome {session.user?.username}</Text>,
            headerBackgroundColor: "blue",
        }}>
            {/* <Tabs.Screen name="history"
                options={{
                    title: "History",
                    headerShown: true,
                }}
            /> */}
            <Tabs.Screen name="home"
                options={{
                    title: "Home",
                    href: "home",
                    headerShown: true,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen name="add"
                options={{
                    title: "Add",
                    href: "add",
                    headerShown: true,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="add" color={color} size={size} />
                    ),

                }}
            />
        </Tabs>
    )
}