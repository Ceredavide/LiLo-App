import { useEffect, useState, useContext } from "react"

import axios from "axios"

import { AuthContext } from "../Context"

import checkConnection from "../utils/checkConnection"

import useEnvVars from "../Configuration"
const { apiUrl } = useEnvVars()

export default function useRisorse() {

    const { auth } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [risorse, setRisorse] = useState()
    const [error, setError] = useState(null)


    useEffect(() => {
        fetchRisorse()
    }, [])

    async function fetchRisorse() {
        try {
            await checkConnection()
            const response = await axios.get(`${apiUrl}/api/risorse`, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })
            setRisorse(response.data.risorse)
        } catch (error) {
            setError(error)
        }
    };

    const handleFetch = async () => {
        setIsLoading(true)
        await fetchRisorse()
        setIsLoading(false)
    }

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await fetchRisorse()
        setIsRefreshing(false)
    }

    return {
        risorse,
        error,
        isLoading,
        isRefreshing,
        handleRefresh,
        handleFetch
    }
}