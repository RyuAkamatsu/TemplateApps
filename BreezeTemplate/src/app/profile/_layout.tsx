import { Redirect, Slot, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { useSession } from '@/src/providers/session';

export default function ProfileLayout() {

    const { session, isLoading } = useSession();

    // Null if accessing "my profile"
    const { userProfile } = useLocalSearchParams<{ userProfile: string }>();

    if (!session && !userProfile) {
        return <Redirect href="/login" />;
    }

    return (
        <View>
            <Slot />
        </View>
    );
}
