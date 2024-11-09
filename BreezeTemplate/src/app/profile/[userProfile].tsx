import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";
import { Link, useLocalSearchParams } from 'expo-router';
import { useSession } from '@/src/providers/session';

export default function UserProfile() {

    const { signOut } = useSession();

    // Null if accessing "my profile"
    const { userProfile } = useLocalSearchParams<{ userProfile: string }>();

    // Look up user using RTK Query
    let user;
    if (!userProfile) {
        user = { name: 'me' };
    } else {
        user = { name: 'them' };
    }

    if (!user) {
        return (
            <View>
                <Text>User not found: {userProfile}</Text>
            </View>
        );
    }

    return (
        <View>
            <Text variant="displaySmall">Firstname</Text>
            <Text variant="displayMedium">Lastname</Text>
            <Text variant="labelLarge">Email</Text>
            <Text variant="labelLarge">Telephone</Text>

            <Link replace href="/" asChild>
                <Text variant="labelLarge">Orders</Text>
            </Link>
            <Link replace href="/" asChild>
                <Text variant="labelLarge">Location</Text>
            </Link>
            <Link replace href="/" asChild>
                <Text variant="labelLarge">Settings</Text>
            </Link>
            <Link replace href="/" asChild>
                <Text variant="labelLarge">Payment</Text>
            </Link>

            <Pressable onPress={() => signOut()}>
                <Text variant="labelLarge">Sign Out</Text>
            </Pressable>
        </View>
    );
}
