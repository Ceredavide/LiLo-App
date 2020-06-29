export default validateSignUp = values => {
    const errors = {};
    //
    // nome
    //
    if (!values.nome) {
        errors.nome = 'Il campo Nome è richiesto.';
    }
    //
    //cognome
    //
    if (!values.cognome) {
        errors.cognome = "Il campo Cognome è richiesto.";
    }
    //
    // classe
    //
    if (!values.classe) {
        errors.classe = "Il campo Classe è richiesto.";
    }
    if (values.classe.length != 2 && values.classe.length != 3){
        errors.classe ="La classe non è valida"
    }
    //
    // email
    //
    if (!values.email) {
        errors.email = "La Email è richiesta."
    }
    // passwords
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