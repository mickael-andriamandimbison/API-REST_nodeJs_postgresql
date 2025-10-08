const {Sequelize} = require("sequelize")

const sequelize = process.env.DATABASE_URL 
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      logging: false
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "127.0.0.1",
        dialect: "postgres",
        port: 5432,
        logging: false,
      }
    );

module.exports = sequelize