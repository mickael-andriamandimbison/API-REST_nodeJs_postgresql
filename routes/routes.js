const express = require("express")
const router = express.Router()
const {add,getAll,getById,updateById,deleteById} = require("../controller/controller")


router.get('/getAll',getAll)
router.get('/get/:id',getById)
router.post('/add',add)
router.put('/update/:id',updateById)
router.delete('/delete/:id',deleteById)

module.exports = router