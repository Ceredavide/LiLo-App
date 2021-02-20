import React from "react"
import { ActivityIndicator, FlatList, RefreshControl } from "react-native"

import useRisorse from "../../hooks/useRisorse"

import Error from "../Error"
import Screen from "../../components/shared/Screen"
import TransitionView from "../../components/shared/TransitionView"
import CardRisorse from "../../components/risorse/CardRisorse"

import Colors from "../../constants/colors"

const RisorseScreen = () => {

    const {
        risorse,
        error,
        isLoading,
        isRefreshing,
        handleRefresh,
        handleFetch
    } = useRisorse()

    function renderItem({ item, index }) {
        return (
            <TransitionView index={index}>
                <CardRisorse risorsa={item} />
            </TransitionView>
        )
    }

    return (
        <Screen>
            {
                isLoading ?
                    <ActivityIndicator color={Colors.white} />
                    : error ?
                        <Error text={error.response?.data || "Qualcosa è andato storto."} reload={handleFetch} />
                        :
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            refreshing={isRefreshing}
                            data={risorse}
                            renderItem={renderItem}
                            keyExtractor={item => item._id}
                            refreshControl={
                                <RefreshControl
                                    refreshing={isRefreshing}
                                    onRefresh={handleRefresh}
                                    tintColor="#fff"
                                />
                            }
                        />
            }
        </Screen>
    )
}

export default RisorseScreen