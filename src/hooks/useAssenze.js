import { useState, useEffect, useContext } from "react"

import axios from "axios"

import { AuthContext } from "../Context"

import checkConnection from "../utils/checkConnection"

import useEnvVars from "../Configuration"
const { apiUrl } = useEnvVars()

export default function useAssenze() {

    const URL_ASSENZE = `${apiUrl}/api/assenze`

    const { auth } = useContext(AuthContext)

    const [assenze, setAssenze] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        handleFetch()
    }, [])

    async function fetchAssenze() {

        const {token} = auth

        if(token === "123456789"){
            const dummyAssenze = [
                {
                    title: "15.09.2021",
                    data: [
                        {
                            nome: "Mario",
                            cognome: "Rossi",
                            motivo: "Malattia"
                        },
                        {
                            nome: "Luca",
                            cognome: "Bianchi",
                            motivo: "Malattia"
                        },
                        {
                            nome: "Paolo",
                            cognome: "Verdi",
                            motivo: "Malattia"
                        }
                    ]
                },
                {
                    title: "17.09.2021",
                    data: [
                        {
                            nome: "Mario",
                            cognome: "Rossi",
                            motivo: "Malattia"
                        },
                        {
                            nome: "Luca",
                            cognome: "Bianchi",
                            motivo: "Malattia"
                        },
                        {
                            nome: "Paolo",
                            cognome: "Verdi",
                            motivo: "Malattia"
                        }
                    ]
                },
                {
                    title: "20.09.2021",
                    data: [
                        {
                            nome: "Mario",
                            cognome: "Rossi",
                            motivo: "Malattia"
                        },
                        {
                            nome: "Luca",
                            cognome: "Bianchi",
                            motivo: "Malattia"
                        },
                        {
                            nome: "Paolo",
                            cognome: "Verdi",
                            motivo: "Malattia"
                        }
                    ]
                }
            ]
            setAssenze(dummyAssenze)
        }else{
            try {
                await checkConnection()
                const response = await axios.get(URL_ASSENZE, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })

                setAssenze(response.data.assenze)

            } catch (error) {
                setError(error)
            }
        }
    }

    const handleFetch = async () => {
        setIsLoading(true)
        await fetchAssenze()
        setIsLoading(false)
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