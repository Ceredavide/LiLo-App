import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import fetchComunicazioni from "../services/fetchComunicazioni"

import Card from "../components/home/Card";
import FloatingButton from "../components/home/FloatingButton";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [comunicazioni, setComunicazioni] = useState([])
  const [userEmail, setUserEmail] = useState("")

  handleLoading = async() => {
    setIsLoading(true)
    const { comunicazioni, userEmail } = await fetchComunicazioni()
    setComunicazioni(comunicazioni)
    setUserEmail(userEmail)
    setIsLoading(false)
  }

  useEffect(() => {
    handleLoading()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
            <View>
              <FlatList
                data={comunicazioni}
                keyExtractor={item => item._id}
                refreshing={isLoading}
                onRefresh={() => handleLoading()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Card
                    titolo={item.titolo}
                    img={item.immagine}
                    sottotitolo={item.sottotitolo}
                    paragrafo={item.testo}
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default HomeScreen;
