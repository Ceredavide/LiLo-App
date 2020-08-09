import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthStack from "./stacks/Auth";
import TabNavigator from "./TabNavigator";

import { SAVE_USER_CREDENTIALS } from "../store/actionTypes"

const { Navigator, Screen } = createStackNavigator()

const AppNavigator = ({ user }) => {
  const dispatch = useDispatch()

  if (user) {
    dispatch({ type: SAVE_USER_CREDENTIALS, user: user })
  }

  const storedUser = useSelector(state => state.user)

  return (
    <NavigationContainer>
      <Navigator screenOptions={_screenOptions} mode="modal">
        {!storedUser.id ?
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
