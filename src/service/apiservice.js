const https = require("https");

function EnviarMensajeWhastapp(texto,numero){

  

    texto = texto.toLowerCase();
    if (texto.includes("hola")) {
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "🚀 Hola, Como estas, Bienvenido."
            }
        });
    } else if (texto =="1"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu"
                
            }
        });
    } else if (texto =="2"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": "51949696593",
            "type": "location",
            "location": {
                "latitude": -12.086268787866294, 
                "longitude": -77.00543685487285,
                "name": "Centro Comercial Rambla",
                "address": "San Borja 123 aviacion"
            }
        });        
    } else {
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "🚀 Hola visita mi web para mas información \n 😃 Por favor ingresar de la lista un número para recibir información \n 1️⃣ Informacion del Curso \n 2️⃣ Ubicacion del local 📍 \n 3️⃣ Enviar temario en pdf 📄 \n 4️⃣ Por favor enviar audio explicando curso 🎙️ \n 5️⃣ Ver video de Introducción al curso \n 6️⃣ Hablar con un humano 👥 \n 7️⃣ Horario de Atención 🕖"
            }
        });
    }

    

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