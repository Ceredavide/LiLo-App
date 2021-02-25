import * as Yup from 'yup';

const loginSchema = Yup.object().shape({

    email: Yup.string()
        .email("L'email inserita non è valida.")
        .required("La email è richiesta."),
        
    password: Yup.string()
        .required('La password è richiesta'),
})

export default loginSchema