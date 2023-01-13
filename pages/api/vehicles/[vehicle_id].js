import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const { vehicle_id } = req.query;
  let query = "";
  if (req.method === "PUT") {
    query =
      "UPDATE vehicle SET availability= NOT availability WHERE vehicle_id= " +
      vehicle_id;
  } else if (req.method === "GET") {
    query = "SELECT * FROM vehicle WHERE vehicle_id= " + vehicle_id;
  } else if (req.method === "DELETE") {
    query = `DELETE FROM vehicle WHERE vehicle_id= ${vehicle_id}`; 
  }
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
