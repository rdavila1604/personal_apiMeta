const https = require("https");

function EnviarMensajeWhastapp(texto,number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",   
        "recipient_type": "individual",
        "to": "51949696593",
        "type": "text",
        "text": {
            "preview_url": false,
            "body": "hola soy raymond davila"
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