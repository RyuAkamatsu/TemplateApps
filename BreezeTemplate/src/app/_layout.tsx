import { Slot, Stack } from "expo-router";
import {
    MD3LightTheme,
    MD3DarkTheme,
    PaperProvider,
    adaptNavigationTheme
} from "react-native-paper";

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    ThemeProvider
} from "@react-navigation/native";

import merge from 'deepmerge';

import { Colors } from '../constants/Colors';

const customLightTheme = { ...MD3LightTheme, colors: Colors.light };
const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);
const CombinedLightTheme = merge(LightTheme, customLightTheme);

import { useTheme } from '../hooks/useTheme';
import { SessionProvider } from '@/src/providers/session';

export default function RootLayout() {
    const { colorScheme } = useTheme();

    const paperTheme = colorScheme === 'dark' ? CombinedDarkTheme : CombinedLightTheme;

    return (
        <PaperProvider theme={ paperTheme }>
            <SessionProvider>
                <ThemeProvider value={ paperTheme }>
                    <Slot />
                </ThemeProvider>
            </SessionProvider>
        </PaperProvider>
    );
}
