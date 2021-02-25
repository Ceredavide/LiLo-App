import { useState, useEffect, useContext } from "react"

import axios from "axios"

import { AuthContext } from "../Context"

import checkConnection from "../utils/checkConnection"

import useEnvVars from "../Configuration"
const { apiUrl } = useEnvVars()

export default function useListProposteByUser() {

    const URL_ASSENZE = `${apiUrl}/api/assenze`

    const { auth } = useContext(AuthContext)

    const [proposteByUser, setProposteByUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        handleFetch()
    }, [])

    async function fetchProposteByUser() {
        try {
            await checkConnection()
            const response = await axios.get(URL_ASSENZE, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })
            
            // suddivisione per stato qua
            setProposteByUser()

        } catch (error) {
            setError(error)
        }
    }

    const handleFetch = async () => {
        setIsLoading(true)
        await fetchProposteByUser()
        setIsLoading(false)
    }

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await fetchProposteByUser()
        setIsRefreshing(false)
    }

    return {
        proposteByUser,
        error,
        isLoading,
        isRefreshing,
        handleRefresh,
        handleFetch
    }

}