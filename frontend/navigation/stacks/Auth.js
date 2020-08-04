import React from "react"

import { createStackNavigator } from "@react-navigation/stack";

import headerStyle from "../../styles/navigation/Header"

import WelcomeScreen from "../../screens/Welcome"
import LoginScreen from "../../screens/Login";
import SignUpScreen from "../../screens/SignUp";

const { Navigator, Screen } = createStackNavigator()

const AuthStack = () => {
  return (
    <Navigator>
      <Screen name="Welcome" component={WelcomeScreen} options={welcomeOptions} />
      <Screen name="Login" component={LoginScreen} options={loginOptions} />
      <Screen name="SignUp" component={SignUpScreen} options={{ ...headerStyle, ...signUpOptions }} />
    </Navigator>
  )
}

const welcomeOptions = {
  headerShown: false
}

const loginOptions = {
  headerShown: false
}

const signUpOptions = {
  title: "Nuovo Account",
  headerTitleStyle: {
    fontSize: 35
  }
}

export default AuthStack