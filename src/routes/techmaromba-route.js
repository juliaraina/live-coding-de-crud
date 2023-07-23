//TODO: Importar o express, o controller e instanciar o Router para chamar os metodos HTTP passando o endereço e função do CRUD referente 

const {addNew, findAll, update, clear} = require("../controllers/techmaromba-controller")

// criar o endereço que vai ser chamado -> o que acontece quando esse endereço é chamado

const express = require("express")
const router = express.Router()

//quando eu chamar o endereço all -> encontre todas as techmarombas
router.get("/all", findAll)

//quando eu chamar o endereço add -> adicione uma techmaromba com os dados 
router.post("/add", addNew)

//quando eu chamar o endereço update/:id -> atualizar a techmaromba que tem esse id
router.patch("/update/:id", update)

//quando eu chamar o endereço clear/:id -> deletar a techmaromba que tem esse id
router.delete("/clear/:id", clear)

module.exports = router