import * as Yup from 'yup';

const propostaSchema = Yup.object().shape({

    nome: Yup.string()
        .max(15, "Troppo lungo.")
        .required("Il nome è richiesto."),

    descrizione: Yup.string()
        .min(15, "È richiesta una breve descrizione della attività.")
        .required("Scrivi qualcosa dai."),

    relatore: Yup.string()
        .required("Il relatore è richiesto."),

    richieste: Yup.string()

})

export default propostaSchema