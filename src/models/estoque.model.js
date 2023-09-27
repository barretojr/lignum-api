const database = require("../database/db");

const conn = database.connect();

const estoqueModel = {
  findById: async (id) => {
    const [rows] = await (await conn).query("", [id]);
    (await conn).release();
    return rows[0];
  },

  findAll: async () => {
    const [rows] = await (await conn).query("");
    (await conn).release();
    return rows;
  },

  create: async (data) => {
    try {
      const [result] = await (await conn).query("", [data]);
      (await conn).release();
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const [result] = await (await conn).query("", [data, id]);
      (await conn).release();
      return result[0].affectedRows;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result] = await (await conn).query("", [id]);
      (await conn).release();
      return result[0].affectedRows; 
    } catch (error) {
      throw error;
    }
  },
};

module.exports = estoqueModel;
