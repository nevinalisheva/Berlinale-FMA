import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const { id } = req.query;
  const query =
    "SELECT DISTINCT location_id FROM location WHERE venue_name = " + id;
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
