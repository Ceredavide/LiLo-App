import { useContext } from 'react'
import * as FileSystem from 'expo-file-system';
import { useDispatch } from "react-redux"

import { useFormik } from "formik";

import { AuthContext } from "../Context"

import { editComunicazione, postComunicazione } from '../store/actions/comunicazioni'

import comunicazioneSchema from '../validation/comunicazioneSchema'

export default function useFormComunicazione(comunicazione, navigation) {

    const dispatch = useDispatch()

    const { auth } = useContext(AuthContext)

    async function handleSubmit(values) {
        if (!!comunicazione) {
            if (comunicazione.immagine === values.immagine) {
                const image = await FileSystem.downloadAsync(values.immagine, FileSystem.documentDirectory + `${values.titolo + Math.random() * 10}.jpeg`)
                dispatch(editComunicazione({ ...values, immagine: image.uri }, navigation, auth.token))
            } else {
                dispatch(editComunicazione(values, navigation, auth.token))
            }
        }
        else {
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