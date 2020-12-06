import React from "react"
import { ActivityIndicator, FlatList, RefreshControl } from "react-native"
import * as WebBrowser from 'expo-web-browser';

import useRisorse from "../hooks/useRisorse"

import Error from "./Error"
import Screen from "../components/shared/Screen"
import TransitionView from "../components/shared/TransitionView"
import IconButton from "../components/shared/IconButton"

import Colors from "../constants/colors"

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
                <IconButton
                    action={() => WebBrowser.openBrowserAsync(item.url)}
                    iconName={item.iconName}
                    text={item.nome}
                    primaryColor={Colors.main}
                    backgroundColor={Colors.white}
                />
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