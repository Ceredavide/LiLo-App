import { useState, useEffect, useContext } from "react"

import axios from "axios"

import { AuthContext } from "../Context"

import checkConnection from "../utils/checkConnection"

import useEnvVars from "../Configuration"
import moment from "moment";

export default function useCommunications(){

    const { apiUrl } = useEnvVars()

    const URL_COMMUNICATIONS = `${apiUrl}/api/comunicazioni`

    const { auth } = useContext(AuthContext)

    const [communications, setCommunications] = useState([])
    const [tags, setTags] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        handleFetch().then()
    }, [])

    async function fetchCommunications() {

        const {token} = auth

        let communications = []
        let tags = []

        if(token === "123456789"){
            communications = formatCommunications(dummyCommunications.comunicazioni)
            tags = dummyCommunications.tags
        } else {
            try{
                await checkConnection()
                const response = await axios.get(URL_COMMUNICATIONS, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                communications = formatCommunications(response.data.comunicazioni)
                tags = response.data.tags
            } catch (error) {
                setError(error.data || "Something went wrong")
            }
        }
        setCommunications(communications)
        setTags(tags)
    }

    const handleFetch = async () => {
        setIsLoading(true)
        await fetchCommunications()
        setIsLoading(false)
    }

    const handleRefresh = async () => {
        setIsRefreshing(true)
        await fetchCommunications()
        setIsRefreshing(false)
    }

    return {
        communications,
        tags,
        error,
        isLoading,
        isRefreshing,
        handleRefresh,
        handleFetch
    }

}

const formatCommunications = (communications) => {
    return communications.map(communication => {
        return {
            ...communication,
            createdAt: moment(communication.createdAt).format("DD/MM")
        }
    })
}

const dummyCommunications = {
    comunicazioni: [
        {
            _id: 1,
            titolo: "Dummy Comunicazione 1",
            sottotitolo: "Sottotitolo della dummy comunicazione 1",
            tags: [
                { nome: "tag1", iconName: "star", colore: "#ff7954" },
                { nome: "tag2", iconName: "sync", colore: "#7ddc1f" }
            ],
            immagine: "https://science.nasa.gov/wp-content/uploads/2024/06/stsci-01hzmfyq7k9gr4za93kyn0egsj-annotated-4k.jpg?w=2560&format=webp",
            createdAt: "2024-01-01T12:00:00Z"
        },
        {
            _id: 2,
            titolo: "Dummy Comunicazione 2",
            sottotitolo: "Sottotitolo della dummy comunicazione 2",
            tags: [
                { nome: "tag3", iconName: "check", colore: "#f4e604" },
                { nome: "tag4", iconName: "redo", colore: "#8400ff" }
            ],
            immagine: "https://dummyimage.com/600x400/000/fff&text=Dummy2",
            createdAt: "2024-01-02T12:00:00Z"
        }
    ],
    tags: [
        { nome: "tag1", iconName: "icon1", colore: "#ff7954" },
        { nome: "tag2", iconName: "icon2", colore: "#7ddc1f" },
        { nome: "tag3", iconName: "icon3", colore: "#f4e604" },
        { nome: "tag4", iconName: "icon4", colore: "#8400ff" }
    ]
};
