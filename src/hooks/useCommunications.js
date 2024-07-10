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
            title: "New Research Opportunities",
            subtitle: "Details on the latest student research programs",
            tags: [
                { nome: "Astronomy", iconName: "star", colore: "#ff7954" },
                { nome: "Research", iconName: "sync", colore: "#7ddc1f" }
            ],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            createdAt: "2024-01-01T12:00:00Z",
            paragraph: "Explore exciting new research opportunities available to students in the field of astronomy. Learn how to get involved and contribute to groundbreaking discoveries."
        },
        {
            _id: 2,
            title: "Green Technology Projects",
            subtitle: "Innovative projects for a sustainable future",
            tags: [
                { nome: "Sustainability", iconName: "check", colore: "#f4e604" },
                { nome: "Innovation", iconName: "redo", colore: "#8400ff" }
            ],
            image: "https://images.unsplash.com/photo-1683632399116-c70282c0d552?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            createdAt: "2024-01-02T12:00:00Z",
            paragraph: "Join the movement towards a sustainable future with innovative green technology projects. Discover how students are making a difference in environmental sustainability."
        },
        {
            _id: 3,
            title: "Health and Wellness Programs",
            subtitle: "New approaches to improve student well-being",
            tags: [
                { nome: "Health", iconName: "favorite", colore: "#ff4444" },
                { nome: "Wellness", iconName: "accessibility", colore: "#00c1ff" }
            ],
            image: "https://plus.unsplash.com/premium_photo-1664299353570-8806eb1de970?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            createdAt: "2024-01-03T12:00:00Z",
            paragraph: "Discover new health and wellness programs designed to enhance student well-being. Learn about the latest initiatives to support a healthy and balanced lifestyle."
        },
        {
            _id: 4,
            title: "Climate Change Initiatives",
            subtitle: "Student-led projects and global solutions",
            tags: [
                { nome: "Climate", iconName: "cloud", colore: "#007bff" },
                { nome: "Environment", iconName: "grass", colore: "#28a745" }
            ],
            image: "https://plus.unsplash.com/premium_photo-1661961617519-ce160a561ee4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            createdAt: "2024-01-04T12:00:00Z",
            paragraph: "Engage with student-led climate change initiatives and explore global solutions. Learn how students are taking action to combat climate change and protect the environment."
        },
        {
            _id: 5,
            title: "Advancements in Artificial Intelligence",
            subtitle: "How AI is transforming student projects",
            tags: [
                { nome: "AI", iconName: "android", colore: "#ff5733" },
                { nome: "Technology", iconName: "code", colore: "#c70039" }
            ],
            image: "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            createdAt: "2024-01-05T12:00:00Z",
            paragraph: "Explore the latest advancements in artificial intelligence and how they are transforming student projects. Learn about innovative AI applications and their impact on education."
        }
    ],
    tags: [
        { nome: "Astronomy", iconName: "star", colore: "#ff7954" },
        { nome: "Research", iconName: "sync", colore: "#7ddc1f" },
        { nome: "Sustainability", iconName: "check", colore: "#f4e604" },
        { nome: "Innovation", iconName: "redo", colore: "#8400ff" },
        { nome: "Health", iconName: "favorite", colore: "#ff4444" },
        { nome: "Wellness", iconName: "accessibility", colore: "#00c1ff" },
        { nome: "Climate", iconName: "cloud", colore: "#007bff" },
        { nome: "Environment", iconName: "grass", colore: "#28a745" },
        { nome: "AI", iconName: "android", colore: "#ff5733" },
        { nome: "Technology", iconName: "code", colore: "#c70039" }
    ]
};
