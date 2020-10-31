import * as Network from 'expo-network';

export default async function checkConnection() {

    const networkState = await Network.getNetworkStateAsync();

    const { isConnected, isInternetReachable } = networkState

    if (!isConnected || !isInternetReachable) {
        throw {
            response: {
                data: "Connessione fallita, verifica la tua connessione ad Internet."
            }
        }
    }
}