const sqlite3 = require('sqlite3').verbose();

// Caminho para o arquivo do banco de dados
const dbPath = './src/db/base.db';

// Cria uma nova instância do banco de dados SQLite
const db = new sqlite3.Database(dbPath);

// Exporta o objeto do banco de dados para uso em outros módulos
module.exports = db;