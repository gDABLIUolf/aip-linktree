const fs = require('fs');

function carregarModels() {
    /*     const nomeDosArquivos = fs.readdir(__dirname)
        for (const nome of nomeDosArquivos) {
            if (nome != "index.js") {
                console.log(`Carregando ${nome}`)
                require(`./${nome}`)
            }
        } */
    require("./UserModel")
}

module.exports = carregarModels