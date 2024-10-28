import { View, StyleSheet } from "react-native";
import {
    Switch,
    Text,
    TouchableRipple,
} from "react-native-paper";
import { useTheme } from '../../hooks/useTheme';

const Settings = () => {

    const { toggleTheme, colorScheme } = useTheme();

    return (
        <View>
            <TouchableRipple onPress={() => toggleTheme() }>
                <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                        <Switch value={ colorScheme === 'dark' } />
                    </View>
                </View>
            </TouchableRipple>
        </View>
    );
};

const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});

export default Settings;