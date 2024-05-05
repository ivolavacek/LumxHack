const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/db/base.db');

// Execute consultas SQL
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, email VARCHAR(30), senha VARCHAR(24), id_lumx VARCHAR(40))");

  db.run("INSERT INTO clientes (email, senha, id_lumx) VALUES (?, ?, ?)", "exemplo@gmail.com", "qwerty123", "3c90c3cc-0d44-4b50-8888-8dd257360000", function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Registro inserido com sucesso, ID: ${this.lastID}`);
  });

  db.each("SELECT id, email, senha, id_lumx FROM clientes", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.email + "\t" + row.senha + "\t" + row.id_lumx);
  });
});

// Fecha a conexão quando terminar
db.close();