const enviarmensaje = require("../service/apiservice");


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
    try {
        // var entry = (req.body["entry"])[0];
        // var changes = (entry["changes"])[0];
        // var value = changes["value"];
        // var objetoMensaje = value["messages"];

        // var messages = objetoMensaje[0];
        // var texto = messages["text"]["body"]

        // var numero = messages["from"];
        var entry = req.body.entry[0].changes[0].value.messages;

       // console.log("Enviado desde :" + numero + " El texto es el siguiente : " + texto);
        //enviarmensaje.EnviarMensajeWhastapp(texto,numero);
        console.log(entry);
        // console.log(objetoMensaje);
        res.send("EVENT_RECEIVED");
    } catch (e) {
        console.log(e);
        res.send("EVENT_RECEIVED");
    }
    
    //console.log("Recibido Consola");

}

module.exports = {
    verificar,recibir
}