import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const query =
    "SELECT vehicle.*, location.venue_name FROM vehicle JOIN location ON vehicle.location_id=location.location_id WHERE vehicle.availability=1";
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
