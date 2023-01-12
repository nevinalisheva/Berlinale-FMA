import React from "react";
import styles from "./RentalDetailsCard.module.css";
import Image from "next/image";

function RentalDetailsCard({ data }) {
  return (
    <div className={styles.rental_details}>
      <Image
        alt={data.vehicle_name}
        src={data.vehicle_image}
        layout="intrinsic"
        priority
      />
      <div>
        <table>
          <tbody>
            <tr>
              <td>Car:</td>
              <td>{data.vehicle_name}</td>
            </tr>
            <tr>
              <td>License Plate:</td>
              <td>{data.plate_no}</td>
            </tr>
            <tr>
              <td>Rental Company:</td>
              <td>{data.company_name}</td>
            </tr>
            <tr>
              <td>Pick up Location:</td>
              <td>{data.pick_up_venue}</td>
            </tr>
            <tr>
              <td>Drop off Location:</td>
              <td>{data.drop_of_venue}</td>
            </tr>
          </tbody>
        </table>
        <button className="button">return car</button>
        <button className="secondary_button">cancel rental</button>
      </div>
    </div>
  );
}

export default RentalDetailsCard;
