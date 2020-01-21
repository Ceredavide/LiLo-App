import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux"

import { fetchComunicazioni } from "../store/actions/comunicazioni"

import Card from "../components/home/Card";
import FloatingButton from "../components/home/FloatingButton";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const isAdmin = useSelector(state => state.user.isAdmin)
  const comunicazioni = useSelector(state => state.comunicazioni.comunicazioni)
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  handleRefresh = () => {
    setIsRefreshing(true)
    dispatch(fetchComunicazioni())
      .then(() => setIsRefreshing(false))
  }

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchComunicazioni())
      .then(() => setIsLoading(false))
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
          <View>
            <FlatList
              data={comunicazioni}
              keyExtractor={item => item._id}
              refreshing={isRefreshing}
              onRefresh={() => handleRefresh()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comunicazione", { comunicazione: item })}
                >
                  <Card
                    titolo={item.titolo}
                    immagine={item.immagine}
                    sottotitolo={item.sottotitolo}
                  />
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default HomeScreen;
