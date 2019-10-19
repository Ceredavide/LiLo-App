import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const HomeScreen = () => {
  const [state, setState] = useState({ data: {}, loading: true });
  const { loading, data } = state;

  fetchComunicazioni = url => {
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        setState({
          data: resJson,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchComunicazioni("http://liloautogestito.ch/API/comunicazioni_static.py");
  }, [loading]);

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.titolo}
        refreshing={loading}
        onRefresh={() => setState({ loading: true })}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Card>
              <Card.Title title={item.titolo} titleStyle={styles.title} />
              <Card.Cover
                source={{
                  uri:
                    item.img +
                    "#" +
                    `${Math.random()
                      .toString(36)
                      .substring(2, 15) +
                      Math.random()
                        .toString(36)
                        .substring(2, 15)}`
                }}
                style={styles.image}
              />
              <Card.Content style={{ marginTop: 10 }}>
                <Paragraph>{item.comunicazione}</Paragraph>
              </Card.Content>
            </Card>
          </View>
        )}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    textAlign: "center"
  },
  image: {}
});

export default HomeScreen;
