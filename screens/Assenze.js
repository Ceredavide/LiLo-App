import React, { useState, useEffect } from "react";
import { StyleSheet, View, SectionList, ActivityIndicator } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Header from "../components/assenze/Header";
import CardAssenza from "../components/assenze/CardAssenza";
import NoAssenze from "../components/assenze/NoAssenze";

import fetchAssenze from "../services/fetchAssenze"

const AssenzeScreen = () => {
  const [assenze, setAssenze] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleFetch = async () => {
    setIsloading(true)
    setAssenze(await fetchAssenze())
    setIsloading(false)
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    setAssenze(await fetchAssenze())
    setIsRefreshing(false)
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : assenze === "" ? (
        <NoAssenze
          isLoading={isLoading}
          loadAssenze={handleRefresh}
        />
      ) : (
            <SectionList
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              showsVerticalScrollIndicator={false}
              renderSectionHeader={({ section: { title } }) => (
                <Header title={title} />
              )}
              renderItem={({ item, index }) => (
                <CardAssenza
                  key={index}
                  nome={item.name}
                  descrizione={item.description}
                />
              )}
              sections={assenze}
              keyExtractor={(item, index) => item + index}
            />
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
  },
  noAssenze: {
    fontSize: hp("3%")
  }
});

export default AssenzeScreen;
