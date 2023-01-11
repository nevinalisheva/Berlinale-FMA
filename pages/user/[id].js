import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";
import dummyImage from "../../assets/dummy.jpg";

function UserProfile() {
  const dummyUser = {
    id: "1",
    name: "HansWurst Zimmerfrau",
    info: "I'm a star!",
    user_email: "wunderbar@schönesleben.com",
    is_customer: false,
    is_company: false,
    is_admin: true,
    company_id: null,
    current_rental: {
      id: 1,
      vehicle_name: "Opel Astra",
      vehicle_image: dummyImage,
      plate_no: "B-OS 5555",
      company_name: "schöne Autos",
      pick_up_venue: "Berlinale Palast",
      drop_of_venue: "Berghain",
    },
  };
  const router = useRouter();
  const { id } = router.query;
  const [userId] = useState(id);
  const [userData, setUserData] = useState(dummyUser);

  useEffect(() => {
    axios
      .get(`/api/userprofile/${userId}`)
      .then((response) => setUserData(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h1>{userData.is_admin ? "Admin" : "User"} Profile</h1>
      <div className={styles.profile_info}>
        <div>
          <div>{userData.name}</div>
          <div>{userData.user_email}</div>
          <div>{userData.info}</div>
        </div>
        <FiEdit2 className={styles.icon} />
      </div>
      <div className={styles.current_booking}>
        <h2>Your next rental</h2>
        <div className={styles.rental_details}>
          <Image
            src={userData.current_rental.vehicle_image}
            layout="intrinsic"
          />
          <table>
            <tr>
              <td>Car:</td> <td>{userData.current_rental.vehicle_name}</td>
            </tr>
            <tr>
              <td>License Plate:</td>
              <td>{userData.current_rental.plate_no}</td>
            </tr>
            <tr>
              <td>Rental Company:</td>
              <td>{userData.current_rental.company_name}</td>
            </tr>
            <tr>
              <td>Pick up Location:</td>
              <td>{userData.current_rental.pick_up_venue}</td>
            </tr>
            <tr>
              <td>Drop off Location:</td>
              <td>{userData.current_rental.drop_of_venue}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
