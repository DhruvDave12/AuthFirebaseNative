import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Text } from "react-native";

import { authentication } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputHandler = (enteredText) => {
    setEmail(enteredText);
  };

  const passwordInputHandler = (enteredText) => {
    setPassword(enteredText);
  };
  const onClickHandler = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
          console.log(re);
          navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        navigation.navigate("Signup");
      });
  };

  const googleSignInHandler = () => {
    // Google SignIn
    //   const provider = new GoogleAuthProvider();
    //   console.log(signInWithRedirect);
    // signInWithRedirect(authentication, provider).then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   const user = result.user;
    //   console.log(user);
    //   navigation.navigate("Home");
    // }).catch(err => {
    //     console.log(err);
    //     navigation.navigate("Signin");
    // });
    console.log("Google Sign In Triggered!!");
};
  return (
    <View>
      <Text>Welcome, Signup to continue</Text>
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={emailInputHandler}
          value={email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={passwordInputHandler}
          value={password}
          secureTextEntry={true}
        />
        <Button title="SignUp" onPress={onClickHandler} />
        <Text>---------------------------</Text>
        <Button
          title="Google SignIn"
          color={"blue"}
          onPress={googleSignInHandler}
        />
        <Text>Already have an account SignIn</Text>
      </View>
    </View>
  );
};

export default SignUp;
