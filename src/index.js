require("dotenv").config()
const express = require('express')
require("./db/mongodb")
const carregarModels = require("./models/index")

const app = express()

app.use(express.json())

carregarModels()

app.listen(3000, () => {
    console.log("Api rodando na porta 3000")
})