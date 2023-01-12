import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import dummyImage from "../../assets/dummy.jpg";
import RentalDetailsCard from "../../components/RentalDetailsCard/RentalDetailsCard";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";

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
  const [userId] = useState(1);
  const [userData, setUserData] = useState(dummyUser);
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/user/${userId}`)
      .then((response) => setUserData(response.data[0]))
      .catch((err) => console.log(err));

    axios
      .get(`/api/rent/${userId}`)
      .then((response) => setCarData(response.data[0]))
      .catch((err) => console.log(err));
  }, []);

  if (userId) {
    return (
      <div className={styles.container}>
        <h1>{userData.is_admin ? "Admin" : "User"} Profile</h1>
        <UserInfoCard data={userData} />
        <div className={styles.current_booking}>
          <h2>Your next rental</h2>
          {carData && <RentalDetailsCard data={carData} user_id={userId} />}
        </div>
      </div>
    );
  }
  return <div className={styles.container}>You shouldn't be here</div>;
}

export default UserProfile;
