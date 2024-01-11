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
                    headerShown: true,
                }}
            />
            <Tabs.Screen name="add"
                options={{
                    title: "Add",
                    headerShown: true,
                }}
            />
        </Tabs>
    )
}