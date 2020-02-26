import React, { useState } from "react"
import { useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthStack from "./stacks/Auth";
import TabNavigator from "./TabNavigator";
import LoadingScreen from "../Loading";

const { Navigator, Screen } = createStackNavigator()

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true)
  const email = useSelector(state => state.user.email)

  if (isLoading) {
    return <LoadingScreen setIsLoading={setIsLoading} />
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={_screenOptions} mode="modal">
        {email === "" ?
          <>
            <Screen name="Auth" component={AuthStack} />
          </> :
          <>
            <Screen name="App" component={TabNavigator} />
          </>}
      </Navigator>
    </NavigationContainer>
  )
}

const _screenOptions = {
  headerShown: false
}

export default AppNavigator
