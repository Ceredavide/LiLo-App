import { useState, useEffect } from "react"

import axios from "axios"

import checkConnection from "../utils/checkConnection"

const useAssenze = () => {

    const URL_ASSENZE = "http://liloautogestito.ch/API/assenze_docenti.py?ses=707bed165969b062c3265679688634664d67593c9fe8583bc445110cae30c790"

    const [assenze, setAssenze] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        handleFetch()
    }, [])

    async function fetchAssenze() {
        let assenze = []
        try {
            await checkConnection()
            const response = await axios.get(URL_ASSENZE)
            assenze = response.data
        } catch (error) {
            assenze = "error"
            // handleError(error)
        } finally {
            return assenze
        }
    }

    const handleFetch = async () => {
        setIsloading(true)
        setAssenze(await fetchAssenze())
        setIsloading(false)
    }

    const handleRefresh = async () => {
        setIsRefreshing(true)
        setAssenze(await fetchAssenze())
        setIsRefreshing(false)
    }

    return {
        assenze,
        isLoading,
        isRefreshing,
        handleRefresh
    }

}

export default useAssenze