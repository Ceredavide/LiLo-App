import React from "react"
import { useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthStack from "./stacks/Auth";
import AppNavigator from "./AppNavigator";

const { Navigator, Screen } = createStackNavigator()

const AuthNavigator = () => {

  const user = useSelector(state => state.auth.user)

  return (
    <NavigationContainer>
      <Navigator screenOptions={_screenOptions} mode="modal">
        {!user._id ?
          <>
            <Screen name="Auth" component={AuthStack} />
          </> :
          <>
            <Screen name="App" component={AppNavigator} />
          </>
        }
      </Navigator>
    </NavigationContainer>
  )
}

const _screenOptions = {
  headerShown: false
}

export default AuthNavigator
