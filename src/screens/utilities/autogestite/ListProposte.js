import React from "react"
import { StyleSheet, ActivityIndicator, View } from "react-native"

import Error from "../../Error"

import Screen from "../../../components/shared/Screen"

import useListProposteByUser from "../../../hooks/useListProposteByUser"

import COLORS from "../../../constants/COLORS"

const ListProposteScreen = () => {

    const {
        proposteByUser,
        error,
        isLoading,
        isRefreshing,
        handleRefresh,
        handleFetch
    } = useListProposteByUser()

    return (
        <Screen>
            {isLoading ?
                <ActivityIndicator color={COLORS.white} /> :
                error ?
                    <Error text={error.response?.data || "Qualcosa è andato storto."} reload={handleFetch} />
                    : null
            }
        </Screen>
    )
}

export default ListProposteScreen