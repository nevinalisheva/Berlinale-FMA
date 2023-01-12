import React from "react";
import styles from "./vehicleCard.module.css";
import Image from "next/image";
import Link from "next/link";

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
    <div className={styles.vehicleListContainer}>
      <div className={styles.vehicleListTopContainer}>
        <Image
          src={image ? image : "/Image_not_available.png"}
          alt="vehicle-image"
          layout="fill"
          className={styles.img}
        />
      </div>
      <div className={styles.vehicleListBottomContainer}>
        <h2>{vehicle_name}</h2>
        <div>
          {vehicle_brand && (
            <p>
              <b>Brand: </b> {vehicle_brand}
            </p>
          )}
          {vehicle_model && (
            <p>
              <b>Model: </b> {vehicle_model}
            </p>
          )}
        </div>

        <Link
          className="button"
          key={vehicle_id}
          href={`/vehicles/${vehicle_id}`}
        >
          <div>See more</div>
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
