const verificar = (req, res) => {
    try {
        let tokenandercode = "ANDERCODENODEJSAPIMETA";
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == tokenandercode) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }

       
        //console.log(req);
    } catch (e) {
        res.status(400).send();
    }
    // res.send("Verificado");
    // console.log("Verificado Consola");

}

const recibir = (req, res) => {
    console.log(req);
    res.send("EVENT_RECEIVED");
    //console.log("Recibido Consola");

}

module.exports = {
    verificar,recibir
}