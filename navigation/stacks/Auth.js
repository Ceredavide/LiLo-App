import React from "react"

import { createStackNavigator } from "@react-navigation/stack";

import headerStyle from "../../styles/navigation/Header"

import LoginScreen from "../../screens/Login";
import SignUpScreen from "../../screens/SignUp";

const { Navigator, Screen } = createStackNavigator()

const AuthStack = () => {
  return (
    <Navigator>
      <Screen name="Login" component={LoginScreen} options={loginOptions}/>
      <Screen name="SignUp" component={SignUpScreen} options={headerStyle} />
    </Navigator>
  )
}

const loginOptions = {
  headerShown: false
}

export default AuthStack

//  export default AuthStack = createStackNavigator(
//   {
//     Login: LoginScreen,
//     SignUp: SignUpScreen
//   },
//   {
//     initialRouteName: "Login",
//     defaultNavigationOptions: {
//       headerBackTitle: "Indietro",
//       headerStyle: {
//         backgroundColor: "#009fff",
//         height: hp("8%"),
//         borderBottomWidth: 0
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontFamily: "open-sans-regular",
//         fontWeight: "bold",
//         fontSize: hp("3%"),
//         marginBottom: hp("1%")
//       }
//     }
//   }
// );

// LoginScreen.navigationOptions = {
//   header: null
// };

// SignUpScreen.navigationOptions = {
//   title: "Nuovo Account"
// }
