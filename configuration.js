import Constants from "expo-constants";

const ENV = {
    dev: {
        apiUrl: "https://cere.dev/lilo"
    },
    lilo: {
        apiUrl: "https://cere.dev/lilo"
    },
    lilu1: {
        apiUrl: ""
    }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.dev;
    } else if (env === 'LiLo') {
        return ENV.LiLo;
    } else if (env === 'LiLu1') {
        return ENV.LiLu1;
    }
};

export default getEnvVars;