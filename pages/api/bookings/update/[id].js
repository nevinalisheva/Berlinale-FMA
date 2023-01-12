import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const { id } = req.query;
  let query =
    "UPDATE booking SET is_active= NOT is_active WHERE vehicle_id= " +
    vehicle_id;

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
