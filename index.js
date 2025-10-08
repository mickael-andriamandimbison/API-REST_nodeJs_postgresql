require('dotenv').config()
const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 3000;
const sequelize = require("./middleware/dbConnection");
const routes = require("./routes/routes");

app.get("/", (req, res) => {
  res.send("Hello, l'API fonctionne");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log("L'API est lance sur le port ", port);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection avec postgresql reussi");
    return sequelize.sync({ alter: true });
  })
  .catch((err) => {
    console.log(
      "Un erreur est survenu lors de la connexion a la base de donne, erreur : ",
      err
    );
  });
