import React, { useContext } from "react"
import { StyleSheet, View, Alert, Text, Button } from "react-native"
import { useDispatch } from "react-redux"

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { AuthContext } from "../../Context"

import { deleteComunicazione } from "../../store/actions/comunicazioni"

const CardComunicazione = ({ id, titolo, sottotitolo, immagine, navigation }) => {

    const { auth } = useContext(AuthContext)

    function handleDelete() {
        Alert.alert(
            'Attenzione:',
            'Sei sicuro di voler cancellare la comunicazione?',
            [
                {
                    text: 'Annulla',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Sì',
                    onPress: () => dispatch(deleteComunicazione(id, auth.token))
                },
            ],
        )
    }

    const dispatch = useDispatch()

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{titolo}</Text>
            <Text style={styles.subititle}>{sottotitolo}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="elimina"
                    color="red"
                    onPress={handleDelete}
                />
                <Button
                    title="modifica"
                    onPress={() => navigation.navigate("cd")}
                    color="#F2AA3E"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: hp("3%"),
        width: wp("90%"),
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        marginBottom: 5
    },
    subititle: {
        fontFamily: "open-sans-regular",
        fontSize: 16
    },
    buttonContainer: {
        marginTop: hp("2%"),
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default CardComunicazione