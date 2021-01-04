// import React from "react"
// import { StyleSheet, View } from "react-native"

// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp
// } from "react-native-responsive-screen";

// import { Placeholder, PlaceholderLine, ShineOverlay } from "rn-placeholder"

// const CardPropostaHolder = () => {
//     return (
//         <View style={styles.container}>
//             <Placeholder Animation={ShineOverlay}>
//                 <PlaceholderLine style={{ marginTop: hp("1%") }} width={45} />
//                 <PlaceholderLine style={{ marginTop: hp("1%") }} width={95} />
//                 <PlaceholderLine width={95} />
//             </Placeholder>
//         </View>
//     )
// }

// const ProposteHolder = () => {
//     const array = new Array(5).fill({})
//     return (array.map((e, i) => { return <CardPropostaHolder key={i} /> }))
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: hp("2%"),
//         marginHorizontal: wp("3%"),
//         alignSelf: "center",
//         alignItems: "center",
//         padding: 10,
//         borderRadius: 10,
//         backgroundColor: "#FFF",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 1
//         },
//         shadowOpacity: 0.18,
//         shadowRadius: 1.0,
//         elevation: 1
//     }
// })

// export default ProposteHolder