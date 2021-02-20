// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput } from "react-native";
// import { useSelector, useDispatch } from "react-redux"

// import { postProposta } from "../store/actions/proposte"

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp
// } from "react-native-responsive-screen";
// import { useFormik } from "formik"
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// import LoadingButton from "../components/shared/LoadingButton"
// import ErrorText from "../components/shared/ErrorText"

// import validateProposta from "../utils/validateProposta"

// const PropostaScreen = ({ navigation }) => {
//   const [errors, setErrors] = useState({})
//   const dispatch = useDispatch()
//   const isLoading = useSelector(state => state.proposte.loadingPost)

//   const tryPostProposta = values => {
//     const errors = validateProposta(values)
//     if (Object.entries(errors).length === 0) {
//       dispatch(postProposta(values, navigation))
//     }
//     setErrors(errors)
//   }

//   const formikProposta = useFormik({
//     initialValues: {
//       nome: null,
//       descrizione: null,
//       numeroPartecipantiMax: null,
//       richieste: null
//     },
//     onSubmit: tryPostProposta
//   })

//   const { values, handleChange, handleSubmit } = formikProposta

//   return (
//     <KeyboardAwareScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
//       <Text style={styles.text}>Nome Attività:</Text>
//       <TextInput
//         style={styles.textInput}
//         onChangeText={handleChange("nome")}
//         value={values.nome}
//       />
//       <ErrorText error={errors.nome} />
//       <Text style={styles.text}>Descrizione:</Text>
//       <TextInput
//         style={styles.textArea}
//         onChangeText={handleChange("descrizione")}
//         value={values.descrizione}
//         multiline={true}
//         numberOfLines={4}
//       />
//       <ErrorText error={errors.descrizione} />
//       <Text style={styles.text}>Numero Partecipanti:</Text>
//       <TextInput
//         style={{ ...styles.textInput }}
//         onChangeText={handleChange("numeroPartecipantiMax")}
//         value={values.numeroPartecipantiMax}
//         keyboardType="numeric"
//       />
//       <ErrorText error={errors.numeroPartecipantiMax} />
//       <Text style={styles.text}>Richieste Particolari:</Text>
//       <TextInput
//         style={{ ...styles.textInput, marginBottom: hp("4%") }}
//         onChangeText={handleChange("richieste")}
//         value={values.richieste}
//       />
//       <LoadingButton
//         handleSubmit={handleSubmit}
//         loading={isLoading}
//         text="Invia"
//         color="#1ed15a"
//         style={{marginBottom: hp("7%")}}
//       />
//     </KeyboardAwareScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: "#F1F5F9",
//     paddingTop: hp("3%")
//   },
//   text: {
//     marginBottom: hp("1%"),
//     alignSelf: "flex-start",
//     fontSize: hp("3%"),
//     marginLeft: wp("5%"),
//   },
//   textInput: {
//     alignSelf: "center",
//     height: hp("8%"),
//     width: wp("80%"),
//     padding: wp("3%"),
//     backgroundColor: "white",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2
//   },
//   textArea: {
//     alignSelf: "center",
//     height: hp("20%"),
//     width: wp("80%"),
//     padding: wp("5%"),
//     backgroundColor: "white",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2
//   }
// });

// export default PropostaScreen;
