import { Image, View, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { Button, Card, Divider } from "react-native-paper";

const Index = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={ require("../../assets/images/cafe_background.png") }
                style={styles.image}
            >
                <Card
                    mode="elevated"
                    style={styles.card}
                >
                    <Card.Content>
                        <Image source={ require("../../assets/images/BreezeCafe_Logo.png") } />
                        <Link replace href="/(auth)/login" asChild>
                            <Button mode='contained'>Login with existing user</Button>
                        </Link>
                        <Link href="/(auth)/register" asChild>
                            <Button mode='contained'>Create a new user</Button>
                        </Link>
                        <Divider />
                        <Link replace href="/(tabs)" asChild>
                            <Button mode='contained-tonal'>Continue as Guest</Button>
                        </Link>
                    </Card.Content>
                </Card>
            </ImageBackground>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        /* @info Make the containing view fill the screen */
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        /* @info Make the image fill the containing view */
        flex: 1,
        /* @info Scale up the image to fill the container, preserving aspect ratio */
        resizeMode: 'cover',
        justifyContent: 'center',
        opacity: 1
    },
    card: {
        opacity: 1,
        marginHorizontal: 20
    }
});
