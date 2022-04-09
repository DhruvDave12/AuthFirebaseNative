import React from "react";

import {View, Text, Button} from 'react-native';

import { authentication } from "../config/firebase";
import { signOut } from "firebase/auth";
const Home = ({navigation}) => {
    
    const logoutHandler = () => {
        signOut(authentication)
        .then((user) => {
            navigation.navigate('Signin');
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <View>
            <Text>Welcome to the home screen</Text>
            <Button title="Logout" onPress={logoutHandler}/>
        </View>
    )
}

export default Home;