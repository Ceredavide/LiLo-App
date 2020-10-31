import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
    nome: Yup.string().required("Il nome è richiesto."),
    cognome: Yup.string().required("Il cognome è richiesto."),
    classe: Yup.string().required("La classe è richiesta.").max(3, "La classe inserita non è valida."),
    email: Yup.string().email("L'email inserita non è valida.")
        .required("La email è richiesta."),
    password: Yup.string().required('La password è richiesta'),
    confirmPassword: Yup.string()
        .required("Il campo è richiesto.")
        .oneOf([Yup.ref('password'), null], 'Le password non coincidono.'),
})

export default signUpSchema