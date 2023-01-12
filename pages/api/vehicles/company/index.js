import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const query =
    "SELECT vehicle.*, company.company_name FROM vehicle JOIN company ON vehicle.company_id=company.company_id WHERE vehicle.availability=1";
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
