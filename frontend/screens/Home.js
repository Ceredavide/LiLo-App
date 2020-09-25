import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { fetchComunicazioni, refreshComunicazioni } from "../store/actions/comunicazioni"

import ErrorScreen from "../screens/Error"

import Screen from "../components/shared/Screen"
import TransitionView from "../components/shared/TransitionView"
import Card from "../components/home/Card";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { comunicazioni, isLoading, isRefreshing, error } = useSelector(state => state.comunicazioni)

  useEffect(() => {
    dispatch(fetchComunicazioni())
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
            text={error.response.data}
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
                  onRefresh={() => dispatch(refreshComunicazioni())}
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
