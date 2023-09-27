const express = require("express");
const router = express.Router();
const {
  showEstoqueHandle,
  showByIdEstoqueHandle,
} = require("../controllers/estoque.controller");
const enums = require("../models/enumeradores");

router.get("/show", async (req, res, next) => {
  try {
    const Invent = await showEstoqueHandle(req, res);
    res.json({ listagem: Invent });
  } catch (error) {
    next(error);
  }
});

router.get("/show/:id", async (req, res, next) => {

  const id = req.params.id;
  try {
    const Invent = await showByIdEstoqueHandle(req, res, id);
    res.json({ listagem: Invent });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
