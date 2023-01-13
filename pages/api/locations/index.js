import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const query = "SELECT DISTINCT venue_name, location_id FROM location";
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
