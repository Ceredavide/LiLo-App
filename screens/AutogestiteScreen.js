import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import TabHeader from "../components/TabHeader";
import ChartProposte from "../components/autogestite/ChartProposte";
import UltimeProposte from "../components/autogestite/UltimeProposte";
import ButtonProposta from "../components/autogestite/ButtonProposta";

const AutogestiteScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Autogestite" />
      <View style={styles.containerList}>
        <ChartProposte />
        <UltimeProposte />
        <ButtonProposta navigation={navigation} />
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
