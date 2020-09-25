import React from "react"
import { useDispatch } from "react-redux"
import { AppLoading } from 'expo';
import * as SecureStore from 'expo-secure-store';
import { Asset } from "expo-asset";
import * as Font from 'expo-font';

import { RESTORE_AUTH } from "../store/actionTypes"

const Loading = ({ setIsLoading }) => {

    const dispatch = useDispatch()

    async function cacheResourcesAsync() {
        try {
            // Load user data
            const cachedData = await SecureStore.getItemAsync("user")

            if (cachedData) {
                const parsedData = await JSON.parse(cachedData)
                dispatch({ type: RESTORE_AUTH, user: parsedData.user })
            }

            return Promise.all(
                // Load assets
                await Asset.loadAsync([
                    require("../assets/images/icon.png"),
                    require("../assets/images/logo.png"),
                    require("../assets/images/scuola.jpeg"),
                    require("../assets/images/student-hat.png"),
                    require("../assets/images/wallpaper.png"),
                    require("../assets/images/login-illustration.png")
                ]),
                // Load fonts
                await Font.loadAsync({
                    "open-sans-light": require("../assets/fonts/OpenSans-Light.ttf"),
                    "open-sans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
                    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf")
                })
            )
        } catch (e) {
            // We might want to provide this error information to an error reporting service
            console.warn(e);
            console.log(e)
        }
    }

    return <AppLoading
        startAsync={cacheResourcesAsync}
        onFinish={() => setIsLoading(false)}
        onError={console.warn}
    />


}

export default Loading;