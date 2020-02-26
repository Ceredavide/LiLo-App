import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"

import store from "./store/store"
import AppNavigator from "./navigation/AppNavigator"

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#009fff" barStyle="light-content" />
            <AppNavigator />
        </Provider>
    )
}

export default App;