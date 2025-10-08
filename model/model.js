const {DataTypes} = require ("sequelize")
const sequelize = require("../middleware/dbConnection")


const User = sequelize.define("User",{
  id_User  : {
    type : DataTypes.STRING,
    allowNull:false,
    primaryKey : true,
    autoIncrement:true
  },
  nom_user : {
    type:DataTypes.STRING,
    allowNull:false,

  },
  sexe_user : {
    type : DataTypes.STRING,
    allowNull:false,
    defaultValue : "Homme"
  }
})

module.exports = User