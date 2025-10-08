const {updateUser,getAllUser,getUserById,addUser,deleteUser} = require("../services/service")

async function add(req,res) {
    try {
        const data = req.body
        const user = await addUser(data)
        res.status(201).json({})
    } catch (error) {
        console.log(error)
    }
}

async function getAll(req,res) {
    try {
        const users = await getAllUser()
        res.status(200).json({
            list_user : users
        })
    } catch (error) {
        console.log(error)
    }
}

async function getById(req,res) {
    try {   
        const id = req.params.id
        if(id){
            const user = await getUserById(id)
            res.status(200).json(user)
        }
    } catch (error) {
        console.log(error);
    }
}


async function updateById(req,res) {
    try {
        const id = req.params.id
        const newData = req.body

        if(id){
            const user = await updateUser(id,newData)
            res.status(200).json(user)
        }
        
    } catch (error) {
        console.log(error)
    }
}

async function deleteById(req,res) {
    try {
        const id = req.params.id
        if(id){
            const userToDel = await deleteUser(id)
            res.status(200).json(userToDel)
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {add,getAll,getById,updateById,deleteById}