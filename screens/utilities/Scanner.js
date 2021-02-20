import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as WebBrowser from 'expo-web-browser';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Screen from "../../components/shared/Screen"

import Colors from "../../constants/colors"

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // richiedo il permesso per utilizzare la fotocamera
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function handleBarCodeScanned({ data }) {
    setScanned(true);
    WebBrowser.openBrowserAsync(data);
  };

  function renderContent() {
    if (hasPermission === null) {
      return (
        <Text style={styles.text}>
          Accetta la richiesta di accesso alla fotocamera
        </Text>
      );
    }
    if (hasPermission === false) {
      return (
        <Text style={styles.text}>
          Lo scanner non può essere utilizzato poiché non si hanno i permessi per accedere alla fotocamera
        </Text>
      );
    }
    return <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
  }

  return (
    <Screen>
      <View style={styles.containerQr}>
        {renderContent()}
      </View>
      {scanned && <Button title={'Esegui di nuovo'} color={Colors.white} onPress={() => setScanned(false)} />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  containerQr: {
    justifyContent: "center",
    alignItems: "center",
    height: hp("60%"),
    width: wp("80%"),
    marginBottom: hp("5%")
  },
  text: {
    color: Colors.white,
    fontFamily: "open-sans-regular"
  }
})

export default Scanner
