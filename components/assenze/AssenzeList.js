import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

const AssenzeList = () => {
  const [state, setState] = useState({ data: {}, loading: true });
  const { data, loading } = state;

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
        data: "niente",
        loading: false
      });
    } else {
      setState({
        data: res,
        loading: false
      });
    }
  };

  useEffect(() => {
    fetchAssenze();
  }, [loading]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } else {
    if (data === "niente") {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Non sono previste assenze</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, paddingTop: 15 }}>
          <SectionList
            refreshing={loading}
            onRefresh={() => setState({ loading: true })}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.body}>
                <Text style={styles.nome}>{item.name}</Text>
                <Text style={styles.descrizione}>{item.description}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={{ backgroundColor: "#FFF" }}>
                <View style={styles.head}>
                  <Text style={styles.giorno}>{title}</Text>
                </View>
              </View>
            )}
            sections={data}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  head: {
    height: 50,
    justifyContent: "center",
    backgroundColor: "#5ea6e5",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 60,
    borderColor: "black"
  },
  body: {
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    backgroundColor: "#FFF"
  },
  giorno: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  nome: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5
  },
  descrizione: {
    textAlign: "center",
    fontSize: 16
  }
});

export default AssenzeList;
