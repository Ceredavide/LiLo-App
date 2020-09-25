import React, { useState } from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"

import store from "./store/store"

import AuthNavigator from "./navigation/AuthNavigator"
import LoadingScreen from "./screens/Loading"

import Colors from "./constants/colors"

const App = () => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Provider store={store}>

            {isLoading ? <LoadingScreen setIsLoading={setIsLoading} /> :
                <>
                    <StatusBar backgroundColor={Colors.main} barStyle="light-content" />
                    <AuthNavigator />
                </>
            }

        </Provider>
    )
}

export default App;