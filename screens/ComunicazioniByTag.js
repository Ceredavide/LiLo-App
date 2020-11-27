import React, { useState, useEffect, useContext } from "react";
import { FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";

import { AuthContext } from "../Context"

import axios from "axios"
import checkConnection from "../utils/checkConnection"
import renderComunicazioni from "../utils/renderComunicazioni"

import ErrorScreen from "../screens/Error"

import Screen from '../components/shared/Screen'
import TransitionView from '../components/shared/TransitionView'
import Card from '../components/comunicazioni/Card'

import useEnvVars from "../configuration"
const { apiUrl } = useEnvVars()

const ComunicazioniByTag = ({ navigation, route }) => {

    const { auth } = useContext(AuthContext)

    const { tag } = route.params

    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [comunicazioniData, setComunicazioniData] = useState({ comunicazioni: {}, error: null })

    async function fetchComunicazioniByTagId(type = "") {
        type === "loading" ? setIsLoading(true) : setIsRefreshing(true)
        try {
            await checkConnection()
            const response = await axios.get(`${apiUrl}/api/comunicazioni/tag/${tag._id}`, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })
            setComunicazioniData({ comunicazioni: renderComunicazioni(response.data.comunicazioni), error: null })
        } catch (error) {
            setComunicazioniData({ comunicazioni: {}, error: error })
        } finally {
            type === "loading" ? setIsLoading(false) : setIsRefreshing(false)
        }
    }

    useEffect(() => {
        fetchComunicazioniByTagId("loading")
    }, []);

    const { comunicazioni, error } = comunicazioniData

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
            {isLoading ? <ActivityIndicator /> : error ?
                <ErrorScreen
                    reload={() => fetchComunicazioniByTagId("loading")}
                    text={''}
                />
                :
                <TransitionView>
                    <FlatList
                        data={comunicazioni}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={() => fetchComunicazioniByTagId()}
                                tintColor="#fff"
                            />
                        }
                    />
                </TransitionView>}
        </Screen>
    )
}

export default ComunicazioniByTag