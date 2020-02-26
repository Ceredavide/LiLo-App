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

  const handleFetch = async () => {
    setIsLoading(true)
    dispatch(fetchComunicazioni())
    setIsLoading(false)
  }

  handleRefresh = async () => {
    setIsRefreshing(true)
    dispatch(fetchComunicazioni())
    setIsRefreshing(false)
  }

  useEffect(() => {
    handleFetch()
  }, []);

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1 }} />
      ) : (
          <View>
            <FlatList
              data={comunicazioni}
              keyExtractor={item => item._id}
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
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
