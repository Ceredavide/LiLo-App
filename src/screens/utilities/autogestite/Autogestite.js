import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, ScrollView, RefreshControl, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { AuthContext } from '../../../Context'

import Button from "../../../components/autogestite/Button"
import EditorButton from "../../../components/autogestite/EditorButton"

import { fetchProposte } from "../../../store/actions/proposte"

import UltimeProposte from "../../../components/autogestite/UltimeProposte";

import COLORS from "../../../constants/COLORS"

const AutogestiteScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const { auth } = useContext(AuthContext)

  const nProposte = useSelector(state => state.proposte.nProposte)

  handleRefresh = () => {
    setIsRefreshing(true)
    dispatch(fetchProposte())
    setIsRefreshing(false)
  }

  useEffect(() => {
    dispatch(fetchProposte())
  }, []);

  return (
    <ScrollView
      style={styles.screen}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />}>
      <View style={styles.buttonContainer}>
        <Button
          color={COLORS.green}
          iconName="add-box"
          text="Nuova proposta"
          action={() => navigation.navigate("Form")}
        />
        <Button
          color={COLORS.third}
          iconName="list"
          text="Le mie proposte"
          action={() => navigation.navigate("ListProposte")}
        />
      </View>
      {auth.user?.role === "administrator" && "editor" ? <EditorButton navigation={navigation}/> : null}
      <View style={styles.numberContainer}>
        <Text style={styles.title}>Numero di proposte fatte:</Text>
        <Text style={styles.number}>{nProposte}</Text>
      </View>
      <Text style={styles.title}>Ultime attività proposte:</Text>
      <UltimeProposte />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    backgroundColor: COLORS.main
  },
  title: {
    marginTop: hp("2%"),
    fontSize: hp("2.5%"),
    fontFamily: "open-sans-regular",
    color: COLORS.white,
    paddingLeft: wp("3%"),
  },
  number: {
    marginTop: hp("2%"),
    fontSize: hp("3%"),
    fontFamily: "open-sans-regular",
    paddingLeft: wp("3%"),
    color: "#009fff"
  },
  buttonContainer: {
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  numberContainer: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default AutogestiteScreen;
