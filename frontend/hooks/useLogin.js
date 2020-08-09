import { useState } from "react"
import { useDispatch } from "react-redux"

import { useFormik } from "formik";

import loginSchema from "../validation/loginSchema"

import { SAVE_USER_CREDENTIALS } from "../store/actionTypes"

import tryLogin from "../utils/tryLogin"

const useLogin = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);

    handleLogin = async ({ email, password }) => {
        setIsLoading(true);
        try {
            const user = await tryLogin(email, password)
            if (!!user) {
                dispatch({ type: SAVE_USER_CREDENTIALS, user: user })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const formikLogin = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: loginSchema,
        onSubmit: handleLogin
    })

    return { isLoading, formikLogin }

}

export default useLogin