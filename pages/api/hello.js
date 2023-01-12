import connection from "./auth/lib/db";

/* // Require and initialize outside of your main handler
const mysql = require("serverless-mysql")({
  config: {
    host: process.env.db_host,
    database: process.env.db_name,
    user: process.env.db_user,
    password: process.env.db_password,
  },
}); */
export default async function handler(req, res) {
  connection
    .promise()
    .query("select * from user")
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving menu from database");
    });
}
