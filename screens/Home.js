import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { fetchComunicazioni } from "../store/actions/comunicazioni";

import Card from "../components/home/Card";
import IconButton from "../components/IconButton";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector(state => state.comunicazioni.comunicazioni);
  const dispatch = useDispatch();

  useEffect(() => {
    loadComunicazioni();
  }, [dispatch]);

  const loadComunicazioni = async () => {
    setIsLoading(true);
    await dispatch(fetchComunicazioni());
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            refreshing={isLoading}
            onRefresh={() => loadComunicazioni()}
            showsVertcialScrollIndicator={false}
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
