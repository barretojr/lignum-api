const express = require("express");
const app = express();
const routes = require("./router/routes");
const swaggerUi = require("swagger-ui-express")

app.use(express.json());

app.use(routes);

app.use("/doc", swaggerUi.serve, swaggerUi.setup())

app.listen(3001, () => {
    console.log("Servidor rodando");
});
