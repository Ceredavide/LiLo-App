import { useState, useEffect } from 'react';

import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from "expo-asset";
import * as Font from 'expo-font';

export default function useCachedResources() {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [user, setUser] = useState(null);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // Load user data
        const cachedUser = await SecureStore.getItemAsync("user")
        setUser(cachedUser)
        // Load assets
        await Asset.loadAsync([
          require("../assets/images/icon.png"),
          require("../assets/images/logo.png"),
          require("../assets/images/scuola.jpeg"),
          require("../assets/images/student-hat.png")
        ]),
          // Load fonts
          await Font.loadAsync({
            "open-sans-light": require("../assets/fonts/OpenSans-Light.ttf"),
            "open-sans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
            "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
            "robot-bold": require("../assets/fonts/Roboto-Bold.ttf"),
            "futura-medium": require("../assets/fonts/Futura-medium.ttf"),
            "futura-bold": require("../assets/fonts/Futura-Bold.ttf"),
            "futura-book": require("../assets/fonts/Futura-Book.ttf")
          })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete: isLoadingComplete, user: user };
}
