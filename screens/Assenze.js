import React, { useState, useEffect } from "react";
import { StyleSheet, View, SectionList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { fetchAssenze } from "../store/actions/assenze";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Header from "../components/assenze/Header";
import Item from "../components/assenze/Item";
import NoAssenze from "../components/assenze/NoAssenze";

const AssenzeScreen = () => {
  const isLoading = useSelector(state => state.assenze.loading);
  const assenze = useSelector(state => state.assenze.assenze);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAssenze());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : assenze === "" ? (
          <NoAssenze
            isLoading={isLoading}
            loadAssenze={() => dispatch(fetchAssenze())}
          />
        ) : (
          <SectionList
            refreshing={isLoading}
            onRefresh={() => dispatch(fetchAssenze())}
            showsVerticalScrollIndicator={false}
            renderSectionHeader={({ section: { title } }) => (
              <Header title={title} />
            )}
            renderItem={({ item, index }) => (
              <Item
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
    paddingTop: hp("2%"),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  },
  noAssenze: {
    fontSize: hp("3%")
  }
});

export default AssenzeScreen;
