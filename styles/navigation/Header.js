import { StyleSheet } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#009fff",
    height: hp("8%"),
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: "white",
    fontFamily: "futura-bold",
    fontWeight: "bold",
    fontSize: hp("5.5%"),
    marginBottom: hp("1%")
  }
});
