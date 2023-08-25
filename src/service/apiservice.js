const https = require("https");

function EnviarMensajeWhastapp(texto,numero){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",   
        "recipient_type": "individual",
        "to": "51949696593",
        "type": "text",
        "text": {
            "preview_url": false,
            "body": "🚀 Hola visita mi web para mas información \n 😃 Por favor ingresar de la lista un número para recibir información \n 1️⃣ Informacion del Curso \n 2️⃣ Ubicacion del local 📍 \n 3️⃣ Enviar temario en pdf 📄 \n 4️⃣ Por favor enviar audio explicando curso 🎙️ \n 5️⃣ Ver video de Introducción al curso \n 6️⃣ Hablar con un humano 👥"
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