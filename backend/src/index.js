const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-ug9et.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

// tipos de parametros
// Query Params: GET req.query (filtros, ordenação, paginação...)
// Route Params: PUT/DELETE  req.params (identificar um recurso na alteracao ou remosao)
// Body: POST req.body (Dados para criacao ou alteracao de um registro)

server.listen(3333);
