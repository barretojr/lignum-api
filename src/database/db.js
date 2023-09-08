const sql = require("mssql");
const dbConfig = require ("./dbConfig")

var pool;

async function connect() {
  try {
    pool = await sql.connect(dbConfig);
    return pool;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados: ", error);
    throw error;
  }
}

async function release() {
  try {
    if (pool) {
      await pool.close();
    }
  } catch (error) {
    console.error("Erro ao liberar conexão: ", error);
  }
}

module.exports = {
  connect,
  release,
};