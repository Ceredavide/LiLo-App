import { useState, useContext } from "react"
import { Alert } from 'react-native'
import { useFormik } from "formik";

import { AuthContext } from '../Context'

import axios from "axios";

import checkConnection from "../utils/checkConnection"

const useComunicazioni = () => {
    const [isLoading, setIsLoading] = useState({ all: false, byTag: false, post: false, delete: false, update: false })
    const [isRefreshing, setIsRefreshing] = useState({ all: false, byTag: false })
    const [comunicazioni, setComunicazioni] = useState({ all: [], byTag: [] })
    const [errors, setErrors] = useState({ all: null, byTag: null })

    const { auth } = useContext(AuthContext)

    async function fetchComunicazioni(tagId = null) {
        try {
            await checkConnection()
            const response = await axios.get(`http://10.3.141.190:5000/api/comunicazioni${tagId && `/tag/${tagId}`}`,
                {
                    headers: {
                        Authorization: "Bearer " + auth.token
                    }
                })
            return { comunicazioni: response.data.comunicazioni, error: null }
        } catch (error) {
            return { comunicazioni: [], error: error }
        }
    };

    async function getAllComunicazioni(refreshing = false) {
        refreshing ? setIsRefreshing(prevState => ({ ...prevState, all: true }))
            : setIsLoading(prevState => ({ ...prevState, all: true }))

        const { comunicazioni, error } = await fetchComunicazioni()
        if (error) {
            setErrors(prevState => ({ ...prevState, all: error }))
        } else {
            setComunicazioni(prevState => ({ ...prevState, all: comunicazioni }))
            setErrors(prevState => ({ ...prevState, all: null }))
        }

        refreshing ? setIsRefreshing(prevState => ({ ...prevState, all: false }))
            : setIsLoading(prevState => ({ ...prevState, all: false }))
    }

    async function getComunicazioniByTagId(tagId, refreshing = false) {
        refreshing ? setIsRefreshing(prevState => ({ ...prevState, all: true }))
            : setIsLoading(prevState => ({ ...prevState, all: true }))

        

        refreshing ? setIsRefreshing(prevState => ({ ...prevState, all: false }))
            : setIsLoading(prevState => ({ ...prevState, all: false }))
    }

    return {
        all: {
            getAllComunicazioni,
            comunicazioni: comunicazioni.all,
            error: errors.all,
            isLoading: isLoading.all,
            isRefreshing: isRefreshing.all
        }
    }
}


export default useComunicazioni