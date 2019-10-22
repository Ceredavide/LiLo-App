import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import Header from "../components/assenze/Header";
import Item from "../components/assenze/Item";

const AssenzeScreen = () => {
  const [state, setState] = useState({ data: {}, loading: true });
  const { data, loading } = state;

  useEffect(() => {
    fetchAssenze();
  }, [loading]);

  fetchAssenze = async () => {
    let cookie = await AsyncStorage.getItem("res");
    fetch(`http://liloautogestito.ch/API/assenze_docenti.py?ses=${cookie}`)
      .then(res => res.json())
      .then(resJson => handleResponse(resJson))
      .catch(error => {
        console.log(error);
      });
  };

  handleResponse = res => {
    if (res.toString() === "") {
      setState({
        data: "",
        loading: false
      });
    } else {
      setState({
        data: res,
        loading: false
      });
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : data === "" ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Non sono previste assenze</Text>
        </View>
      ) : (
        <View style={{ flex: 1, paddingTop: 15 }}>
          <SectionList
            refreshing={loading}
            onRefresh={() => setState({ loading: true })}
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
            sections={data}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF"
  }
});

export default AssenzeScreen;
