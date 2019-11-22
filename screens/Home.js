import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as firebase from "firebase";

import { saveUser } from "../store/actions/user";
import { fetchComunicazioni } from "../store/actions/comunicazioni";

import Card from "../components/home/Card";
import FloatingButton from "../components/home/FloatingButton";

const HomeScreen = ({ navigation }) => {
  const isLoading = useSelector(state => state.comunicazioni.loading);
  const data = useSelector(state => state.comunicazioni.comunicazioni);
  const dispatch = useDispatch();

  const userEmail = firebase.auth().currentUser.email;

  useEffect(() => {
    dispatch(fetchComunicazioni());
    dispatch(saveUser(userEmail));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              refreshing={isLoading}
              onRefresh={() => dispatch(fetchComunicazioni())}
              showsVertcialScrollIndicator={false}
              renderItem={({ item }) => (
                <Card
                  titolo={item.titolo}
                  img={item.img}
                  comunicazione={item.comunicazione}
                />
              )}
            />
            {userEmail === "ceredavide@live.it" ||
            userEmail === "andrixmelone01@gmail.com" ||
            userEmail === "samuele.meschini@outlook.it" ? (
              <FloatingButton
                name="edit"
                action={() => navigation.navigate("Comunicazioni")}
                color="white"
              />
            ) : null}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  cardContainer: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default HomeScreen;
