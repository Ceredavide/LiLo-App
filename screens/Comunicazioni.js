import React from "react";
import { StyleSheet, View } from "react-native";
import {useSelector} from "react-redux"

import ListComunicazioni from "../components/comunicazioni/ListComunicazioni";
import MyButton from "../components/MyButton";

const ComunicazioniScreen = ({ navigation }) => {
  const comunicazioni = useSelector(state => state.comunicazioni.comunicazioni)
  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <MyButton
          action={() => navigation.navigate("NewComunicazione")}
          text="Nuova Comunicazione"
          color="#1ed15a"
        />
        <ListComunicazioni comunicazioni={comunicazioni} />
      </View>
    </View>
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
    backgroundColor: "#F1F5F9"
  }
});

export default ComunicazioniScreen;