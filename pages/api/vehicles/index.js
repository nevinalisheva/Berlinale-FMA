import connection from "../auth/lib/db";

export default async function handler(req, res) {
  connection
    .promise()
    .query("SELECT * FROM vehicle WHERE availability=1")
    .then(([result]) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
}
