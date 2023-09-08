const database = require("../database/db");

const conn = database.connect();

const userModel = {
  create: async (user) => {
    const { depart, username, name, email, password } = user;
    const [result] = await (
      await conn
    ).query("EXEC InserirUsuario ?, ?, ?, ?, ?", [
      depart,
      username,
      name,
      email,
      password,
    ]);
    (await conn).release();
    return result[0].userId;
  },

  findOne: async (user) => {
    const [rows] = await (await conn).query("EXEC SelecionarUsuario ?", [user]);
    (await conn).release();
    return rows;
  },

  findById: async (id) => {
    const [rows] = await (
      await conn
    ).query("EXEC SelecionarUsuariosComFiltros ?", [id]);
    (await conn).release();
    return rows[0];
  },

  findByDepartamento: async (depart) => {
    const [rows] = await (
      await conn
    ).query("EXEC SelecionarUsuariosComFiltros @IdDepartamento = ?", [depart]);
    (await conn).release();
    return rows;
  },

  findByUsuario: async (user) => {
    const [rows] = await (
      await conn
    ).query("EXEC SelecionarUsuariosComFiltros @Usuario = ?", [user]);
    (await conn).release();
    return rows;
  },

  findByEmail: async (email) => {
    const [rows] = await (
      await conn
    ).query("EXEC SelecionarUsuariosComFiltros @Email = ?", [email]);
    (await conn).release();
    return rows;
  },

  findAll: async () => {
    const [rows] = await (await conn).query("EXEC SelecionarUsuarios");
    (await conn).release();
    return rows;
  },

  update: async (id, user) => {
    const { username, name, email, password } = user;
    const [result] = await (
      await conn
    ).query("EXEC AtualizarUsuario ?, ?, ?, ?, ?, ?", [
      id,
      username,
      name,
      email,
      password,
    ]);
    (await conn).release();
    return result[0].affectedRows;
  },

  updateToken: async (params) => {
    const { token, email } = params;
    const [result] = await (await conn).query("", [token, email]);
    (await conn).release();
    return result[0].affectedRows;
  },

  listenToken: async (params) => {
    const { token, email } = params;
    const [result] = await (await conn).query("", [token, email]);
    (await conn).release();
    return result[0];
  },

  updateOne: async (user) => {
    const { email, password } = user;
    const [result] = await (await conn).query("", [email, password]);
    (await conn).release();
    return result[0].affectedRows;
  },

  delete: async (id) => {
    const [result] = await (await conn).query("", [id]);
    (await conn).release();
    return result[0].affectedRows;
  },
};

module.exports = userModel;
