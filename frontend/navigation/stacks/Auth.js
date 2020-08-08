import React from "react"

import { createStackNavigator } from "@react-navigation/stack";

import Header from "../../components/headers/Auth"

import WelcomeScreen from "../../screens/Welcome"
import LoginScreen from "../../screens/Login";
import SignUpScreen from "../../screens/SignUp";

const { Navigator, Screen } = createStackNavigator()

const AuthStack = () => {
  return (
    <Navigator screenOptions={screenOptions} headerMode="screen">
      <Screen name="Welcome" component={WelcomeScreen} options={welcomeOptions} />
      <Screen name="Login" component={LoginScreen}/>
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  )
}

const screenOptions = {
  header: props => <Header {...props} />
}

const welcomeOptions = {
  headerShown: false
}

export default AuthStack