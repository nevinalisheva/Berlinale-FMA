import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const { user_name, user_email, is_customer, is_company, is_admin } = req.body;
  if ((req.method = "POST")) {
    const query =
      "INSERT INTO user(user_name, user_email, is_customer, is_company,is_admin) VALUES (?, ?, ?, ?,?)";

    connection
      .promise()
      .query(query, [user_name, user_email, is_customer, is_company, is_admin])
      .then(([result]) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving menu from database");
      });
  }
}
