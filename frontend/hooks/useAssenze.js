import { useState, useEffect, useContext } from "react"

import axios from "axios"

import { AuthContext } from "../Context"

import checkConnection from "../utils/checkConnection"

const useAssenze = () => {

    const URL_ASSENZE = "http://localhost:5000/api/assenze"

    const { auth } = useContext(AuthContext)

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
            const response = await axios.get(URL_ASSENZE, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })
            assenze = response.data.assenze
            console.log(assenze)
        } catch (error) {
            console.log(error)
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