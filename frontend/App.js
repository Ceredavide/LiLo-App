import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"

import store from "./store/store"
import AuthNavigator from "./navigation/AuthNavigator"

import useCachedResources from "./hooks/useCachedResources"

import Colors from "./constants/colors"

const App = () => {
    const { isLoadingComplete, user } = useCachedResources()

    if (!isLoadingComplete) {
        return null
    }

    else return (
        <Provider store={store}>
            <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
            <AuthNavigator user={user} />
        </Provider>
    )

}

export default App;