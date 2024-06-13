import React, { useState, useEffect ,useMemo } from "react"
import { Provider } from "react-redux"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AuthStack from "./src/navigation/stacks/Auth";
import AppNavigator from "./src/navigation/AppNavigator";

import store from "./src/store/store"

import { AuthContext } from "./src/Context"

import { useFonts } from 'expo-font';
import {Asset} from "expo-asset";
import * as SecureStore from "expo-secure-store";

const { Navigator, Screen } = createStackNavigator()

const App = () => {

    const [appIsReady, setAppIsReady] = useState(true)
    const [auth, setAuth] = useState({})

    const [fontsLoaded] = useFonts({
        "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
        "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        "PlayFair-SemiBold": require("./assets/fonts/PlayfairDisplay-SemiBold.ttf")
    })

    useEffect(() => {
        async function prepare() {
            try {

                const cachedData = await SecureStore.getItemAsync("user")

                if (cachedData) {
                    const parsedData = await JSON.parse(cachedData)
                    setAuth(parsedData)
                }

                return Promise.all(
                    // Load assets
                    await Asset.loadAsync([
                        require("./assets/images/icon.png"),
                        require("./assets/images/logo.png"),
                        require("./assets/images/scuola.jpeg"),
                        require("./assets/images/student-hat.png"),
                        require("./assets/images/wallpaper.png"),
                        require("./assets/images/illustrations/autogestite.jpg"),
                        require("./assets/images/illustrations/login.png"),
                        require("./assets/images/illustrations/mappa.jpg"),
                        require("./assets/images/illustrations/qr.jpg"),
                        require("./assets/images/illustrations/risorse.jpg"),
                    ]),
                )
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const providerAuth = useMemo(() => ({ auth, setAuth }), [auth, setAuth])

    if (!appIsReady || !fontsLoaded) {
        return null
    }

    else {
        return (
            <Provider store={store}>
                <AuthContext.Provider value={providerAuth}>
                    <NavigationContainer>
                        <Navigator screenOptions={_screenOptions} mode="modal">
                            {!auth.token ?
                                <Screen name="Auth" component={AuthStack}/> :
                                <Screen name="App" component={AppNavigator}/>
                            }
                        </Navigator>
                    </NavigationContainer>
                </AuthContext.Provider>
            </Provider>
        )
    }
}

const _screenOptions = {
    headerShown: false
}


export default App;