import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"

import MainNavigator from "./navigation/MainNavigator"
import store from "./store/store"

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#009fff" barStyle="light-content" />
            <MainNavigator />
        </Provider>
    )
}

export default App;