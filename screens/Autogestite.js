import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import TabHeader from "../components/TabHeader";
import ChartProposte from "../components/autogestite/ChartProposte";
import UltimeProposte from "../components/autogestite/UltimeProposte";
import MyButton from "../components/MyButton";

const AutogestiteScreen = ({ navigation }) => {
  goToProposta = () => {
    navigation.navigate("Proposta");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Autogestite" />
      <View style={styles.containerList}>
        <ChartProposte />
        <UltimeProposte />
        <MyButton
          action={goToProposta}
          text="Proponi un'attività"
          color="#009fff"
        />
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
    backgroundColor: "#F1F5F9"
  }
});

export default AutogestiteScreen;
