import { FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";

import useCommunications  from "../../hooks/useCommunications";

import ErrorScreen from "../Error"

import Screen from "../../components/shared/Screen"
import TransitionView from "../../components/shared/TransitionView"
import Card from "../../components/comunicazioni/Card";

const HomeScreen = ({ navigation }) => {

  const {
    communications,
    error,
    isLoading,
    isRefreshing,
    handleRefresh,
    handleFetch
  } = useCommunications()

  function renderItem({ item, index }) {
    return (
      <TransitionView index={index}>
        <TouchableOpacity onPress={() => navigation.navigate("Comunicazione", { comunicazione: item })}>
          <Card comunicazione={item} />
        </TouchableOpacity>
      </TransitionView>
    )
  }

  return (
      <Screen>
        {isLoading ? (
            <ActivityIndicator />
        ) : error ? (
            <ErrorScreen
                reload={handleFetch}
                text={error.response?.data || "Qualcosa è andato storto."}
            />
        ) : (
            <TransitionView>
              <FlatList
                  data={communications}
                  keyExtractor={(item) => item._id}
                  showsVerticalScrollIndicator={false}
                  renderItem={renderItem}
                  refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={handleRefresh}
                        tintColor="#fff"
                    />
                  }
              />
            </TransitionView>
        )}
      </Screen>
  );
};

export default HomeScreen;
