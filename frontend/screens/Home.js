import React, { useEffect, useContext } from "react";
import { FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { AuthContext } from "../Context"

import { fetchComunicazioni, refreshComunicazioni } from "../store/actions/comunicazioni"

import ErrorScreen from "../screens/Error"

import Screen from "../components/shared/Screen"
import TransitionView from "../components/shared/TransitionView"
import Card from "../components/home/Card";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { comunicazioni, isLoading, isRefreshing, error } = useSelector(state => state.comunicazioni)
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    dispatch(fetchComunicazioni(auth.token))
  }, []);

  function renderItem({ item, index }) {
    return (
      <TransitionView index={index}>
        <TouchableOpacity onPress={() => navigation.navigate("Comunicazione", { comunicazione: item })}>
          <Card comunicazione={item} />
        </TouchableOpacity>
      </TransitionView>
    )
  }

  return (
    <Screen>
      {
        isLoading ? <ActivityIndicator /> : error ?
          <ErrorScreen
            reload={() => dispatch(fetchComunicazioni())}
            text={error.response.data || "Qualcosa è andato storto."}
          />
          :
          <TransitionView>
            <FlatList
              data={comunicazioni}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={() => dispatch(refreshComunicazioni(auth.token))}
                  tintColor="#fff"
                />
              }
            />
          </TransitionView>
      }
    </Screen>
  );
};

export default HomeScreen;
