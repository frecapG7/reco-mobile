import { Tabs } from "expo-router";


export default function AuthLayout(){
    return (

        <Tabs>
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
                }}
            />
            <Tabs.Screen name="add"
                options={{
                    title: "Add",
                    href: "add",
                    headerShown: true,
                }}
            />
        </Tabs>
    )
}