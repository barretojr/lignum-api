const EnumDepartamento = {
  MASTER: 1,
  ADM: 2,
  USUARIO_LOGADO: 3,
  PROJETISTA: 4,
};

const EnumEstoque = {
  ACOMPRAR: 1,
  SEMITEM: 2
}

const EnumStatus = {
  ATIVO: 1,
  INATIVO: 2,
};

const EnumFormaPagamento = {
  DINHEIRO: 1,
  CARTAO_CREDITO: 2,
  CARTAO_DEBITO: 3,
  PIX: 4,
  BOLETO: 5,
};


module.exports = {
  EnumDepartamento,
  EnumEstoque,
  EnumStatus,
  EnumFormaPagamento,
};