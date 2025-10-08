const { Schema } = require("mongoose")

const candidatShema = new mongoose.Schema({
  id_candidat : {type:String,required:true},
  code_candidat : {type:String,required:true},
})

module.exports = {candidatShema}