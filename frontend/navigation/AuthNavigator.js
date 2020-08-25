import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthStack from "./stacks/Auth";
import AppNavigator from "./AppNavigator";

import { RESTORE_AUTH } from "../store/actionTypes"

const { Navigator, Screen } = createStackNavigator()

const AuthNavigator = ({ user }) => {

  const dispatch = useDispatch()

  if (user) {
    dispatch({ type: RESTORE_AUTH, user: user })
  }

  const storedUser = useSelector(state => state.auth.user)

  return (
    <NavigationContainer>
      <Navigator screenOptions={_screenOptions} mode="modal">
        {!storedUser ?
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
