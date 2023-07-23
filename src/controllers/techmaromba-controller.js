//TODO: Importar o Model e criar as funções que vão realizar as operações do CRUD

const TechMaromba = require("../models/TechMaromba")

const findAll = async (request, response) => {
    try {
        const techmarombaList = await TechMaromba.find()
        response.status(200).json(techmarombaList)
    } catch (error) {
        console.error(error)
        response.status(500).json({
            message: error.message
        })
    }
}

const addNew = async (request, response) => {
    try {
        const {
            name,
            description,
            urlProfile,
            urlImage
        } = request.body  /* desestruturação do objeto */

        const techmarombaCreated = new TechMaromba({
            name,
            description,
            urlProfile,
            urlImage,
            createdAt: new Date()
        })

        const result = await techmarombaCreated.save()
        response.status(201).json({ techmaromba: result })
    } catch (error) {
        console.error(error)
        response.status(500).json(error.message)
    }
}

const update = async (request, response) => {
    try {
        const techmarombaFound = await TechMaromba.findById({ _id: request.params.id })

        if(request.body.name) {
            techmarombaFound.name = request.body.name
        }
        if(request.body.description) {
            techmarombaFound.description = request.body.description
        }
        if(request.body.urlProfile) {
            techmarombaFound.urlProfile = request.body.urlProfile
        }
        if(request.body.urlImage) {
            techmarombaFound.urlImage = request.body.urlImage
        }

        const techmarombaUpdated = await techmarombaFound.save()
        response.status(200).json(techmarombaUpdated)
    } catch (error) {
        console.error(error)
        response.status(500).json({
            message: "Não foi possível atualizar, tente novamente!"
        })
    }
}

const clear = async (request, response) => {
    try {
        const { id } = request.params
        await TechMaromba.findByIdAndDelete(id)

        response.status(200).json({message: `${id} foi deletada.`})
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}

module.exports = { 
    findAll,
    addNew,
    update,
    clear
}