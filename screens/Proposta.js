import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import FormProposta from "../components/proposta/Form";

const PropostaScreen = ({ navigation }) => {
  return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <FormProposta navigation={navigation} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
});

export default PropostaScreen;
