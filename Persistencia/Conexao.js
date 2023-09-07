import mysql from "mysql2/promise";

export default async function conectar() {
  if (global.poolConexoes) {
    return global.poolConexoes.getConecction();
  }
  const poolConexoes = await mysql.createConnection({
    host: "129.146.68.51",
    user: "aluno18-pfsii",
    port: 3306,
    password: "B2jO1h85mrtOwHAdabH2",
    database: "backendFullStack2",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
  global.poolConexoes = poolConexoes;
  return await poolConexoes.getConecction();
}
