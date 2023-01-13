import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const { vehicle_id } = req.query;
  const query =
    "SELECT DISTINCT location.venue_name, company.company_name FROM location JOIN vehicle ON location.location_id=vehicle.location_id JOIN company ON vehicle.location_id=location.location_id WHERE vehicle.vehicle_id=" +
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
