import React from "react"
import { Provider } from "react-redux"

import MainNavigator from "./navigation/MainNavigator"
import store from "./store/store"

const App = () => {
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    )
}

export default App;