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
            "to": numero,
            "type": "location",
            "location": {
                "latitude": -12.086268787866294, 
                "longitude": -77.00543685487285,
                "name": "Centro Comercial Rambla",
                "address": "San Borja 123 aviacion"
            }
        });      
    } else if (texto =="3"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "document",
            "document": {
                "link": "http://www.economia.unam.mx/deschimex/cechimex/chmxExtras/repositorio/archivos/Hola.pdf",
                "caption": "Temario del Curso #001 "
            }
        });      
    } else if (texto =="4"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "audio",
            "audio": {
                "link": "https://filesamples.com/samples/audio/mp3/sample1.mp3",                
            }
        });      
    } else if (texto =="5"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": numero,
            "text": {
                "preview_url": true,
                "body": "Introduccion al curso https://youtu.be/"
            }
        });    
    } else if (texto =="6"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "En breve me ponde en contacto contigo"
                
            }
        });  
    } else if (texto =="7"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Horario de Atencion : Lunes a Viernes. \nHorario : 9:00 am a 5:00 pm"
                
            }
        });
    } else if (texto =="8"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Para consultar a Chapgpt usar 'gchapgpt: <Ingrese Consulta>'"
                
            }
        });
    } else if (texto.includes("gchapgpt:")){
        let parts =texto.split("gchatgpt: ");
        console.log(parts[1]);

        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Respuesta de chatgpt"
                
            }
        });                        
    } else if (texto =="0"){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "🚀 Hola visita mi web para mas información. \n 😃 Por favor ingresar de la lista un número para recibir información. \n 1️⃣. Informacion del Curso. \n 2️⃣. Ubicacion del local. 📍 \n 3️⃣. Enviar temario en pdf. 📄 \n 4️⃣. Por favor enviar audio explicando curso. 🎙️ \n 5️⃣. Ver video de Introducción al curso. \n 6️⃣. Hablar con un humano. 👥 \n 7️⃣. Horario de Atención. 🕖 \n 8️⃣. Consultar a Chapgpt usar 'gchapgpt: <Ingrese Consulta>'. \n 0️⃣. Regresar al Menú."
            }
        });       
    } else if (texto.includes("gracias")){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Gracias a ti por contactarme"
                
            }
        });     
    } else if (texto.includes("adios") || texto.includes("bye") || texto.includes("nos vemos")){
        var data = JSON.stringify({
            "messaging_product": "whatsapp",   
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Hasta luego"
                
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
                "body": "🚀 Hola visita mi web para mas información. \n 😃 Por favor ingresar de la lista un número para recibir información. \n 1️⃣. Informacion del Curso. \n 2️⃣. Ubicacion del local. 📍 \n 3️⃣. Enviar temario en pdf. 📄 \n 4️⃣. Por favor enviar audio explicando curso. 🎙️ \n 5️⃣. Ver video de Introducción al curso. \n 6️⃣. Hablar con un humano. 👥 \n 7️⃣. Horario de Atención. 🕖 \n 8️⃣. Consultar a Chapgpt usar 'gchapgpt: <Ingrese Consulta>'. \n 0️⃣. Regresar al Menú."
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
            Authorization : "Bearer EAAOTv6MMiQoBO0ionT1oGn3v5hn4v7ZCCkhsk7KGfGlavlY07j5ZBV4UhztnGLH22V0qieatwkaXaM3qU6o5axlKrzIkAAyH7UQay7SvXVEiM4wX80SDjdR7PJdH1QEs2l1GqiC0yyyy4xVPEcY4reFKyaIdsZCSENZCAQMZBLSAV8pCPbyh0oBpAbg7t5jZAq9rmtDEAi4fVC7oCHU0BH" 
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