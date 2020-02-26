import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthStack from "./stacks/Auth";
import TabNavigator from "./TabNavigator";
import LoadingScreen from "../Loading";

const { Navigator, Screen } = createStackNavigator()

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (isLoading) {
    return <LoadingScreen setIsLoading={setIsLoading} setIsAuthenticated={setIsAuthenticated} />
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={_screenOptions}>
        {isAuthenticated ?
          <>
            <Screen name="App" component={TabNavigator} />
          </> :
          <>
            <Screen name="Auth" component={AuthStack} />
          </>}
      </Navigator>
    </NavigationContainer>
  )
}

const _screenOptions = {
  headerShown: false
}

export default AppNavigator
