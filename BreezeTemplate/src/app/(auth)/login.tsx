import { Image, Text, View, StyleSheet } from "react-native";
import {
    Button,
    Card, Divider, TextInput
} from "react-native-paper";
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View>
            <Card mode={ "elevated" }>
                <Card.Content>
                    <Image source={ require("../../../assets/images/BreezeCafe_Bean.png") } />
                    <Text>Sign in to your account</Text>
                    <TextInput
                        label='Username'
                        value={ username }
                        onChangeText={ text => setUsername(text) }
                        mode={'flat'}
                    />
                    <TextInput
                        label='Password'
                        value={ password }
                        onChangeText={ text => setUsername(text) }
                        mode={'flat'}
                    />
                    <Button
                        mode='contained'
                        loading={ isLoading }
                    >
                        Continue
                    </Button>
                    <Divider />
                    <Button
                        mode='contained-tonal'
                        loading={ isLoading }
                    >Continue with Google</Button>
                    <Button
                        mode='contained-tonal'
                        loading={ isLoading }
                    >Continue with Facebook</Button>

                </Card.Content>
            </Card>
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

export default Login;
