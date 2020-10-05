const axios = require("axios");
const cheerio = require("cheerio")

const HttpError = require("../models/HttpError")

const ASSENZE_URL = "http://www.liceolocarno.ch/Liceo_di_Locarno/intranetutenti/Siti_docenti/momi_test.php"

const getAssenze = async (req, res, next) => {

    const fetchAssenze = async () => {
        const result = await axios.get(ASSENZE_URL, {
            auth: {
                username: process.env.ASSENZE_USER,
                password: process.env.ASSENZE_PSW
            }
        });
        return cheerio.load(result.data);
    };

    let assenze = []

    try {
        const result = await fetchAssenze()

        // trovato tr contententi dati
        let rows = result("tbody")["1"].children.filter(item => item.name === "tr" && item.type === "tag")


        // controllo se ci sono assenze
        if (rows.length <= 3) {
            res.status(200).json({ assenze: [] })
        }

        // rimuovo due tr inutili
        rows.splice(0, 2)

        let tmp = {
            data: "",
            assenze: []
        };

        rows.forEach((tr, idx) => {
            if (tr.children.length === 1) {
                tmp = {
                    ...tmp,
                    data: tr.children[0].children[1].children[0].data
                }
            } else if (tr.children.length === 3) {

                let assenza = {
                    nome: tr.children[0].children[0].data,
                    cognome: tr.children[1].children[0].data,
                    motivo: tr.children[2].children[0].data
                }
                tmp = {
                    ...tmp,
                    assenze: [...tmp.assenze, assenza]
                }

                if (idx === rows.length - 1) {
                    assenze.push(tmp)
                    tmp = {
                        data: "",
                        assenze: []
                    }
                    console.log(assenze)
                }
            } else {
                assenze.push(tmp)
                tmp = {
                    data: "",
                    assenze: []
                }
            }
        });


    } catch (error) {
        console.log(error)
        return next(new HttpError("Errore nel reperire le assenze.", 500))
    }

    res.status(200).json({assenze: assenze})

}

module.exports = getAssenze