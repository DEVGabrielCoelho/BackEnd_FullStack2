import { Router } from "express";
import ProdutoCTRL from "../Controle/ProdutoCtrlPid.js";

const rotaProduto = new Router();
const produtoCtrl = new ProdutoCTRL();

rotaProduto
  .get("/", produtoCtrl.consultar)
  .post("/", produtoCtrl.gravar)
  .put("/", produtoCtrl.atualizar)
  .delete("/", produtoCtrl.excluir);
// .get('/codigo' ,produtoCtrl.consultarPeloCodigo);

export default rotaProduto;
