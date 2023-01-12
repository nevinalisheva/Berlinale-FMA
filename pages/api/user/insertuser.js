import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const query =
    "INSERT INTO user (user_name, user_email, is_customer, is_company) VALUES (?, ?, ?, ?), [user_name, user_email, is_customer, is_company]";

  connection
    .promise()
    .query(query)
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving menu from database");
    });
}
