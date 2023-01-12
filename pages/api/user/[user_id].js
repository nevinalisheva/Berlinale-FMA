// export default function getUserProfileById(req, res) {
//   //const db = await somedb
//   const { user_id } = req.query;
//   const query =
//     "SELECT *, c.company_name AS user_company FROM user u LEFT JOIN company c ON u.company_id = c.company_id WHERE u.user_id = " +
//     user_id;
//   const queryCurrentRental =
//     "SELECT v.*, c.company_name AS car_company, l.venue_name FROM vehicle v RIGHT JOIN booking b ON v.vehicle_id = b.vehicle_id LEFT JOIN company c ON v.company_id = c.company_id LEFT JOIN location l ON v.location_id = l.location_id WHERE b.user_id = 1 ORDER BY b.booking_id DESC LIMIT 1;";

//   // const userData = db.all(query,[user_id] );
//   // res.json(userData);
//   res.json({ id: +user_id });
// }

import connection from "../auth/lib/db";

export default async function handler(req, res) {
  const { user_id } = req.query;
  const query =
    "SELECT *, c.company_name AS user_company FROM user u LEFT JOIN company c ON u.company_id = c.company_id WHERE u.user_id = " +
    user_id;
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
