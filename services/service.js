const { where } = require("sequelize")
const User = require("../model/model")


async function getAllUser() {
    const users = await User.findAll()
    return users
}

async function GetUserById(id) {
    const user = await User.findOne({where : {id_user:id}})

    if(!user){
        const error = new Error("Aucun user trouveé")
            error.status=404
        throw error
    }

    return user
}

async function addUser(user_data) {
    const user = await User.create(user_data)
    return user
}

async function deleteUser(id) {
     const user = await User.findOne({where : {id_user:id}})
     if(!user){
        const error = new Error("Aucun user trouveé")
            error.status=404
        throw error
    }
    user.destroy()

    return "Deleted"
}

async function updateUser(id,data) {
    const user = await User.findOne({where : {id_user:id}})
     if(!user){
        const error = new Error("Aucun user trouveé")
            error.status=404
        throw error
    }
    
    user.name_user = data.name_user
    user.sexe_user = data.sexe_user

    await user.save()
    return user
}

module.exports = {updateUser,getAllUser,GetUserById,addUser,deleteUser}