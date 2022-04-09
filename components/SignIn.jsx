import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

import { authentication } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signIn, setIsSignIn] = useState(false);

    const emailInputHandler = (enteredText) => {
        setEmail(enteredText);
    }

    const passwordInputHandler = (enteredText) => {
        setPassword(enteredText);
    }
    const onClickHandler = () => {
        console.log(email,password);
        // Sign In Anonymously
        signInWithEmailAndPassword(authentication, email, password)
        .then((user) => {
            
            setIsSignIn(true);
            navigation.navigate('Home');
        })
        .catch(err => {
            console.log(err);
            navigation.navigate('Signin');
        })
    }

    const googleSignInHandler = () => {
        console.log("Google SignIn Handler");
        // Google SignIn
        navigation.navigate('Home');
    }
    return (
        <View>
            <Text>Welcome, Signin to continue</Text>
            <View>
                <TextInput 
                    placeholder="Email"
                    onChangeText={emailInputHandler}
                    value={email}
                />
                <TextInput 
                    placeholder="Passwprd"
                    onChangeText={passwordInputHandler}
                    value={password}
                    secureTextEntry={true}
                />
                <Button title="Sign In" onPress={onClickHandler}/>
                <Text>---------------------------</Text>
                <Button title="Google SignIn" color={"blue"} onPress={googleSignInHandler}/>
                <Text>Dont have an account? SignUp</Text>
            </View>
        </View>
    )
}

export default SignIn;

