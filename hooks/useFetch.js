import { useState, useEffect } from "react"
import axios from "axios";

import handleError from "../services/handleError"

export default useFetch = (url, options = null) => {
    const [response, setResponse] = useState([])
    const [isLoading, setIsloading] = useState(false)

    const doFetch = async () => {
        setIsloading(true);
        try {
            const response = await axios.get(url, options)
            setResponse(response.data)
        } catch (error) {
            handleError(error)
        } finally {
            setIsloading(false)
        }
    }

    useEffect(() => {
        doFetch()
    }, [])

    return { response, isLoading }
}