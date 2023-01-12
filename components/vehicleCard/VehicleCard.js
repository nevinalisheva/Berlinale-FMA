import React from "react";
import styles from "./vehicleCard.module.css";

const VehicleCard = (props) => {
  const {
    vehicle_id,
    vehicle_name,
    vehicle_desc,
    vehicle_brand,
    vehicle_model,
    mileage,
    availability,
    plate_no,
    location_id,
    image,
    company_id,
  } = props.car;

  return (
    <div className={styles.vehiculeListContainer}>
      <h2>{vehicle_name}</h2>
      <div>
        <p>Brand: {vehicle_brand}</p>
        <p>Model: {vehicle_model}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
