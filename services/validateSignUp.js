export default validateSignUp = values => {
    const errors = {};
    if (!values.nome) {
        errors.nome = 'Il campo Nome è richiesto.';
    }
    if (!values.cognome) {
        errors.cognome = "Il campo Cognome è richiesto.";
    }
    if (!values.classe) {
        errors.classe = "Il campo Classe è richiesto.";
    }
    if (!values.email) {
        errors.email = "La Email è richiesta."
    }
    if (!values.password) {
        errors.password = "Inserisci una password."
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Reinserisci la password."
    }
    if (!!values.password && values.password.length < 6) {
        errors.password = "La password è troppo corta."
    }
    if (values.password !== values.confirmPassword) {
        errors.password = "Le due password non coincidono."
    }
    return errors;
}