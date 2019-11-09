import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import TabHeader from "../components/TabHeader";
import IconButton from "../components/IconButton";

const ComunicazioniScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TabHeader title="Comunicazioni" />
        <IconButton
          name="plus"
          action={() => navigation.navigate("NewComunicazioni")}
        />
      </View>
      <View style={styles.containerList}>
        <Text>Bella Mateeeeeee</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  containerList: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default ComunicazioniScreen;
