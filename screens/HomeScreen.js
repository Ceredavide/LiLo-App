import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { fetchComunicazioni } from "../store/actions/comunicazioni";

import TabHeader from "../components/TabHeader";
import Card from "../components/home/Card";
import IconButton from "../components/IconButton";

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const data = useSelector(state => state.comunicazioni.comunicazioni);
  const dispatch = useDispatch();

  const loadComunicazioni = async () => {
    setLoading(true);
    await dispatch(fetchComunicazioni());
    setLoading(false);
  };

  useEffect(() => {
    loadComunicazioni();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{ flexDirection: "row" }}>
        <TabHeader title="Home" />
        <IconButton
          name="edit"
          action={() => navigation.navigate("Comunicazioni")}
        />
      </View> */}
      <View style={styles.containerList}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            refreshing={loading}
            onRefresh={() => loadComunicazioni()}
            renderItem={({ item }) => (
              <Card
                titolo={item.titolo}
                img={item.img}
                comunicazione={item.comunicazione}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  containerList: {
    flex: 1,
    padding: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9"
  }
});

export default HomeScreen;
