import React from "react"
import { Provider } from "react-redux"

import store from "./store/store"
import AppNavigator from "./navigation/AppNavigator"

import useCachedResources from "./hooks/useCachedResources"

const App = () => {
    const { isLoadingComplete, user } = useCachedResources()

    if (!isLoadingComplete) {
        return null
    }

    else return (
        <Provider store={store}>
            <AppNavigator user={user} />
        </Provider>
    )

}

export default App;