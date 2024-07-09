import React from "react"

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../../screens/auth/Welcome"
import LoginScreen from "../../screens/auth/Login";
import SignUpScreen from "../../screens/auth/SignUp";
import EmailConfirmationScreen from "../../screens/auth/EmailConfirmation"

const { Navigator, Screen } = createStackNavigator()

const AuthStack = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Welcome" component={WelcomeScreen} options={welcomeOptions} />
      <Screen name="Login" component={LoginScreen} options={LogInOptions} />
      <Screen name="SignUp" component={SignUpScreen} options={SignUpOptions} />
      <Screen name="EmailConfirmation" component={EmailConfirmationScreen} options={welcomeOptions} />
    </Navigator>
  )
}

const screenOptions = {
    headerShown: false,
}

const welcomeOptions = {
  headerShown: false
}

const LogInOptions = {
  title: "Login"
}

const SignUpOptions = {
  title: "Registrazione"
}

export default AuthStack