const estoqueModel = require("../models/estoque.model");
const enums = require("../models/enumeradores");

async function showEstoqueHandle(req, res) {
    try {
        const foundInvet = await estoqueModel.findAll()
        res.json({listagem: foundInvet});
    }
    catch(error){
        return res.status(500).json({
            message: "Ocorreu um erro ao listar o inventario",
          });
    }
}

async function showByIdEstoqueHandle(req, res, id) {
  try {
    const foundInvet = await estoqueModel.findById(id)
    if(foundInvet.lenght === 0){
        res.json({
            message: "não contem nenhum item cadastrado",
        })
    }
    else{
        res.json({ listagem: foundInvet });
    }
  } catch (error) {
    return res.status(500).json({
        message: "Ocorreu um erro ao listar o inventário",
      });
  }
}

module.exports = {
  showEstoqueHandle,
  showByIdEstoqueHandle,
};
