import { useState, useEffect } from "react"

import fetchAssenze from "../utils/fetchAssenze"

const useAssenze = () => {
    const [assenze, setAssenze] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        handleFetch()
    }, [])

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