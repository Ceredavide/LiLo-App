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
      <Screen name="Login" component={LoginScreen} options={LogInOptions}/>
      <Screen name="SignUp" component={SignUpScreen} options={SignUpOptions}/>
    </Navigator>
  )
}

const screenOptions = {
  header: props => <Header {...props} />
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