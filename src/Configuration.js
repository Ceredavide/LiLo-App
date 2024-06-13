import Constants from "expo-constants";

const ENV = {
  dev: {
    apiUrl: "https://cere.dev/lilo"
  },
  lilo: {
    apiUrl: "https://cere.dev/lilo"
  },
  lilu: {
    apiUrl: ""
  }
};

const getEnvVars = () => {

  const env = Constants.expoConfig?.extra?.env

  if (!__DEV__ && env) {
    switch (env) {
      case env.indexOf("lilo") !== -1:
        return ENV.lilo;
      case env.indexOf("lilu") !== -1:
        return ENV.lilu;
      default:
        return ENV.dev;
    }
  }
  return ENV.dev;
};

export default getEnvVars;