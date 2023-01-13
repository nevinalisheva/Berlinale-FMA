export default async function handler(req, res) {
  const query = "SELECT user_id FROM user WHERE user_email = ?";

  connection
    .promise()
    .query(query, [user_email])
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving menu from database");
    });
}
