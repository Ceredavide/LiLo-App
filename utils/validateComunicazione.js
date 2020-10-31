export default validateComunicazione = values => {
    const errors = {};
    if (!values.titolo) {
        errors.titolo = 'Il campo Titolo è richiesto.';
    }
    if (!values.sottotitolo) {
        errors.sottotitolo = 'Il campo Sottotitolo è richiesto';
    }
    if (!values.paragrafo) {
        errors.paragrafo = 'Il campo Paragrafo è richiesto';
    }
    if (!values.image) {
        errors.image = 'Non hai selezionato nessuna immagine.';
    }
    return errors;
}