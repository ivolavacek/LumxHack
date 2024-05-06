const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('caminho/para/seu/banco.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, email VARCHAR(30), senha VARCHAR(24), id_lumx VARCHAR(40))");
  
    db.each("SELECT id, email, senha, id_lumx FROM clientes", (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.email + "\t" + row.senha + "\t" + row.id_lumx);
    });
});

// Fecha a conexão quando terminar
db.close();