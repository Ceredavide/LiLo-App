import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Colors from "../../constants/colors"

export default styles = {
  headerStyle: {
    backgroundColor: Colors.main,
    height: hp("15%"),
    shadowColor: 'transparent'
  },
  headerTitleAlign: "left",
  headerTitleStyle: {
    alignSelf: "flex-start",
    color: Colors.white,
    fontFamily: "System",
    fontSize: hp("5.2%"),
    marginLeft: wp("3%")
  }
}