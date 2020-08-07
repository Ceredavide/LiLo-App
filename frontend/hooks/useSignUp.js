import { useState } from "react"

import { useFormik } from "formik";

import signUpSchema from "../validation/signUpSchema"

import createUser from "../utils/createUser"

const useSignUp = (navigation) => {
    const [isLoading, setIsLoading] = useState(false)

    const initialValues = {
        nome: "",
        cognome: "",
        classe: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const formikSignUp = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            await createUser(values, navigation)
            setIsLoading(false)
        }
    })

    return { isLoading, formikSignUp }
}

export default useSignUp