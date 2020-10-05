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
        if (!!comunicazione) {
        } else {
            dispatch(postComunicazione(values, navigation, auth.token))
        }
    }

    function getInitialValues(comunicazione) {
        if (comunicazione) {
            //restituisco un array con solo id
            return {
                ...comunicazione,
                tags: comunicazione.tags.map(tag => tag._id)
            }
        } else return {
            titolo: "",
            sottotitolo: "",
            paragrafo: "",
            tags: [],
            immagine: null,
        }
    }

    const formikComunicazione = useFormik({
        initialValues: getInitialValues(comunicazione),
        validationSchema: comunicazioneSchema,
        onSubmit: handleSubmit
    })

    return { formikComunicazione }

}