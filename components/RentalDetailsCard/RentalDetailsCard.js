import React, { useState } from "react";
import styles from "./RentalDetailsCard.module.css";
import Image from "next/image";
import DropOffModal from "../DropOffModal/DropOffModal";
import CancelModal from "../CancelModal/CancelModal";

function RentalDetailsCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  return (
    <>
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
          <button className="button" onClick={() => setShowModal(true)}>
            return car
          </button>
          <button
            className="secondary_button"
            onClick={() => setShowCancelModal(true)}
          >
            cancel rental
          </button>
        </div>
      </div>
      {showModal && (
        <DropOffModal setShowModal={setShowModal} data={data.drop_of_venue} />
      )}
      {showCancelModal && (
        <CancelModal setShowModal={setShowCancelModal} data={data.id} />
      )}
    </>
  );
}

export default RentalDetailsCard;
