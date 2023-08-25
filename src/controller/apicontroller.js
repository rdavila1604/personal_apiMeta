const verificar = (req, res) => {
    res.send("Verificado");
    console.log("Verificado Consola");

}

const recibir = (req, res) => {
    res.send("Recibido");
    console.log("Recibido Consola");

}

module.exports = {
    verificar,recibir
}