import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="basket"
                options={{
                    title: "Basket",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="basket" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Setting",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
