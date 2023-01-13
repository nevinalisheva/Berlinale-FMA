import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const { id } = req.query;
  const query =
    "SELECT v.*, c.company_name AS car_company, l.venue_name, b.is_active FROM vehicle v RIGHT JOIN booking b ON v.vehicle_id = b.vehicle_id LEFT JOIN company c ON v.company_id = c.company_id LEFT JOIN location l ON v.location_id = l.location_id WHERE b.user_id =" +
    id +
    " ORDER BY b.booking_id DESC LIMIT 1;";
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
