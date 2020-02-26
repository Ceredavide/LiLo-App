import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default styles = {
  headerStyle: {
    backgroundColor: "#009fff",
    height: hp("12%"),
  },
  headerTitleStyle: {
    justifyContent: "center",
    color: "white",
    fontFamily: "System",
    fontSize: hp("5%"),
    marginBottom: hp("1%")
  },
  headerTintColor: "#fff",
  headerBackTitleStyle: {
    color: "#fff"
  }
}