import { createStackNavigator } from "react-navigation";

import AutogestiteScreen from "../../screens/Autogestite";
import PropostaScreen from "../../screens/Proposta";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const AutogestiteStack = createStackNavigator(
  {
    Autogestite: AutogestiteScreen,
    Proposta: PropostaScreen
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#009fff",
        height: hp("8%"),
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontFamily: "open-sans-regular",
        fontWeight: "bold",
        fontSize: hp("5%")
      }
    }
  }
);

AutogestiteScreen.navigationOptions = {
  title: "Autogestite"
};
PropostaScreen.navigationOptions = {
  title: "Proposta"
};

AutogestiteStack.navigationOptions = {
  tabBarLabel: "Autogestite"
};

export default AutogestiteStack;
