export default validateComunicazione = values => {
    const errors = {};
    if (!values.nome) {
        errors.nome = 'Il campo Nome è richiesto.';
    }
    if (!values.descrizione) {
        errors.descrizione = "E richiesta una breve descrizione dell'attività.";
    }
    if (!values.numeroPartecipantiMax) {
        errors.numeroPartecipantiMax = "Devi indicare quante persone possono aderire all'attività.";
    }
    if (values.numeroPartecipantiMax > 200) {
        errors.numeroPartecipantiMax = "Poi mi spieghi dove la metti tutta quella gente."
    }
    return errors;
}