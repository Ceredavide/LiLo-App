import { useContext } from 'react'
import { useDispatch } from "react-redux"

import { useFormik } from "formik";

import { AuthContext } from "../Context"

import { postComunicazione } from '../store/actions/comunicazioni'

import comunicazioneSchema from '../validation/comunicazioneSchema'

export default function useFormComunicazione(comunicazione, navigation) {

    const dispatch = useDispatch()

    const { auth } = useContext(AuthContext)

    function handleSubmit(values) {
        if (comunicazione) {

        } else {
            dispatch(postComunicazione(values, navigation, auth.token))
        }
    }

    const formikNuovaComunicazione = useFormik({
        initialValues: comunicazione || {
            titolo: "",
            sottotitolo: "",
            paragrafo: "",
            tags: [],
            immagine: null,
        },
        validationSchema: comunicazioneSchema,
        onSubmit: handleSubmit
    })

    return { ...formikNuovaComunicazione }

}