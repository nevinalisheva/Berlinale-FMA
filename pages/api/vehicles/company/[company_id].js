import connection from "../../auth/lib/db";

export default async function handler(req, res) {
  const { company_id } = req.query;
  const query =
    "SELECT DISTINCT company.company_name FROM company JOIN vehicle ON company.company_id=vehicle.company_id WHERE vehicle.company_id=" +
    company_id;
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
