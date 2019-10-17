import { createStackNavigator } from "react-navigation";

import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createStackNavigator({
    Home: HomeScreen
  });
  
  HomeStack.navigationOptions = {
    tabBarLabel: "Home"
  };

export default HomeStack;
