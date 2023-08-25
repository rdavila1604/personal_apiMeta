const https = require("https");

function EnviarMensajeWhastapp(texto,numero){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",   
        "recipient_type": "individual",
        "to": "51949696593",
        "type": "text",
        "text": {
            "preview_url": false,
            "body": "🚀 Hola visita mi web para mas información \n 😃 Por favor ingresar de la lista un número para recibir información\n 📌 1.Informacion del Curso \n2.Ubicacion del local \n3.Enviar temario en pdf \n4.Por favor enviar audio explicando curso 🎙️ \n5.Ver video de Introducción al curso \n5.Hablar con un humano"
        }
    });

    const options = {
        host : "graph.facebook.com",
        path : "/v17.0/105388349330517/messages",
        method : "POST",
        body: data,
        headers : {
            "Content-Type" : "application/json",
            Authorization : "Bearer EAAOTv6MMiQoBO2UFf6rlQ0xivouXKKen4HmEjZCeQAHGykfK2clzj3PY9vYBOLpG2mStAttoaNrwfMT4PQtAY5Ws5Uf0SuBS7ZAAdeXQLnx6ovo8fhQ0jKuH716gjrjZAFGZBblfZCFaXnw1ZBGAclcD7ZBpG6Hdln4vZBqiDVuypL5KdIUN39LyGBMd6p9QhOHe6ssHir5CcHFdIiLFJgEZD" 
        }
    }

    const req = https.request(options,res => {
        res.on("data",d=>{
            process.stdout.write(d);
        })
    });

    req.write(data);
    req.end();
    
}

module.exports = {
    EnviarMensajeWhastapp
}