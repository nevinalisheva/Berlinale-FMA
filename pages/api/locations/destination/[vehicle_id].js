import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const { vehicle_id } = req.query;
  const query =
    "SELECT DISTINCT location.venue_name FROM location JOIN booking ON booking.destination=location.location_id JOIN vehicle ON vehicle.vehicle_id=booking.vehicle_id WHERE vehicle.vehicle_id=" +
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
