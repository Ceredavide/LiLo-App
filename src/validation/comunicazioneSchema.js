import * as Yup from 'yup';

const comunicazioneSchema = Yup.object().shape({

    titolo: Yup.string()
        .max(15, "Troppo lungo.")
        .required("Il titolo è richiesto."),

    sottotitolo: Yup.string()
        .max(55, "Troppo Lungo.")
        .required("Il sottotitolo è richiesto."),

    paragrafo: Yup.string()
        .required("Scrivi qualcosa dai."),

    tags: Yup.array()
        .max(2, "Al massimo 2 categorie."),

    immagine: Yup.string()
        .required("Devi mettercela una immagine.")

})

export default comunicazioneSchema