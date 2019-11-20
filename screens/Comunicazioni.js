import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const ComunicazioniScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default ComunicazioniScreen;
