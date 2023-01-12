import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const { vehicle_name, vehicle_desc, vehicle_brand, vehicle_model, mileage, availability, plate_no, location_id, image, company_id, vehicle_type } = req.body;
  const query =
    "INSERT INTO vehicle(vehicle_name, vehicle_desc, vehicle_brand, vehicle_model, mileage, availability, plate_no, location_id, image, company_id, vehicle_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  connection
    .promise()
    .query(query, [vehicle_name, vehicle_desc, vehicle_brand, vehicle_model, mileage, availability, plate_no, location_id, image, company_id, vehicle_type])
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving menu from database");
    });
}
