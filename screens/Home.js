import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { fetchComunicazioni, refreshComunicazioni } from "../store/actions/comunicazioni"

import Card from "../components/home/Card";
import FloatingButton from "../components/home/FloatingButton";
import ComunicazioniHolder from "../components/home/ComunicazioniHolder"

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const isAdmin = useSelector(state => state.user.isAdmin)
  const { comunicazioni, isLoading, isRefreshing } = useSelector(state => state.comunicazioni)
  
  useEffect(() => {
    dispatch(fetchComunicazioni())
  }, []);

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <ComunicazioniHolder />
      ) : (
          <View>
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
            {isAdmin ? (
              <FloatingButton
                name="edit"
                action={() => navigation.navigate("Comunicazioni")}
                color="white"
              />
            ) : null}
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default HomeScreen;
