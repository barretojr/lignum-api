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
};

module.exports = estoqueModel;
