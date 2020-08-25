import React, { useEffect } from "react";
import { View, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { fetchComunicazioni, refreshComunicazioni } from "../store/actions/comunicazioni"

import Screen from "../components/shared/Screen"
import TransitionView from "../components/shared/TransitionView"
import Card from "../components/home/Card";
import FloatingButton from "../components/home/FloatingButton";
import ComunicazioniHolder from "../components/home/ComunicazioniHolder"

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { comunicazioni, isLoading, isRefreshing } = useSelector(state => state.comunicazioni)

  useEffect(() => {
    dispatch(fetchComunicazioni())
  }, []);

  if (isLoading) {
    return <ComunicazioniHolder />
  }

  return (
    <Screen>
      <TransitionView style={{ flex: 1 }}>
        <FlatList
          data={comunicazioni}
          keyExtractor={item => item._id}
          refreshing={isRefreshing}
          onRefresh={() => dispatch(refreshComunicazioni())}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            < TouchableOpacity
              onPress={() => navigation.navigate("Comunicazione", { comunicazione: item })}
            >
              <Card comunicazione={item} />
            </TouchableOpacity>
          )}
        />
      </TransitionView>
      {/* {isAdmin ? (
          <FloatingButton
            name="edit"
            action={() => navigation.navigate("Comunicazioni")}
            color="white"
          />
        ) : null} */}
    </Screen>
  );
};

export default HomeScreen;
