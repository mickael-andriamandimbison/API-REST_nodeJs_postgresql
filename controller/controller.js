const {updateUser,getAllUser,GetUserById,addUser,deleteUser} = require("../services/service")

async function add(req,res) {
    try {
        const data = req.body
        const user = await addUser(data)
        res.status(201).json({})
    } catch (error) {
        res.status(error.status).json({message : "Erreur lors de l'ajout "})
    }
}

async function getAll(req,res) {
    
}

async function getById(req,res) {
    
}

async function updateById(req,res) {
    
}

async function deleteById(req,res) {
    
}

module.exports = {add,getAll,getById,updateById,deleteById}