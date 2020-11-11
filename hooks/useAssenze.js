import { useState, useEffect, useContext } from "react"

import axios from "axios"

import { AuthContext } from "../Context"

import checkConnection from "../utils/checkConnection"

import { apiUrl } from "../configuration"

const useAssenze = () => {

    const URL_ASSENZE = `${apiUrl}/api/assenze`

    const { auth } = useContext(AuthContext)

    const [assenze, setAssenze] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        handleFetch()
    }, [])

    async function fetchAssenze() {
        try {
            await checkConnection()
            const response = await axios.get(URL_ASSENZE, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })

            setAssenze(response.data.assenze)

        } catch (error) {
            setError(error)
        }
    }

    const handleFetch = async () => {
        setIsloading(true)
        await fetchAssenze()
        setIsloading(false)
    }

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await fetchAssenze()
        setIsRefreshing(false)
    }

    return {
        assenze,
        error,
        isLoading,
        isRefreshing,
        handleRefresh,
        handleFetch
    }

}

export default useAssenze