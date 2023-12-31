import rotaCidade from "./Router/RotaCidade.js";
import rotaProduto from "./Router/RotaProduto.js";
import routerPessoa from "./Router/RouterPessoas.js";
import routerServico from "./Router/RouterServicos.js";
import rotaCategoriaProd from "./Router/RotaCategoriaProd.js";
import express from "express";
import { verifyAccess, verifyJWT } from "./Router/VerifyAccessAndControl.js";

const server = express();

server.use((req, res, next) => {
  console.log("Origem da solicitação:", req.get("origin"));

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
//Implementação do middleware de verificação JWT
server.use("/pessoas", verifyJWT, routerPessoa);
server.use("/produto", verifyJWT, rotaProduto);
server.use("/servicos", verifyJWT, routerServico);
server.use("/categoria", verifyJWT, rotaCategoriaProd);
server.use("/cidade", verifyJWT, rotaCidade);
server.use(verifyAccess);

const localName = "localhost";
const serverName = "0.0.0.0";
const localPort = 3308;
const serverPort = 4018;

server.listen(localPort, localName, () => {
  console.log(`Service running on http://${serverName}:${serverPort}`);
});
