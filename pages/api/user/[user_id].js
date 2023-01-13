import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const { user_id } = req.query;
  const query =
    "SELECT *, c.company_name AS user_company FROM user u LEFT JOIN company c ON u.company_id = c.company_id WHERE u.user_id = " +
    user_id;
  connection
    .promise()
    .query(query)
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
}
