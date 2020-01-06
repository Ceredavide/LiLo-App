import { createStackNavigator } from "react-navigation";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import LoginScreen from "../../screens/Login";
import SignUpScreen from "../../screens/SignUp";

 export default AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerBackTitle: "Indietro",
      headerStyle: {
        backgroundColor: "#009fff",
        height: hp("8%"),
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontFamily: "open-sans-regular",
        fontWeight: "bold",
        fontSize: hp("3%"),
        marginBottom: hp("1%")
      }
    }
  }
);

LoginScreen.navigationOptions = {
  header: null
};

SignUpScreen.navigationOptions = {
  title: "Nuovo Account"
}
