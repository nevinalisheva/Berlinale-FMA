import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";

function UserProfile() {
  const dummyUser = {
    id: "1",
    name: "HansWurst Zimmerfrau",
    info: "I'm a star!",
    user_email: "wunderbar@schönesleben.com",
    is_customer: true,
    is_company: false,
    is_admin: false,
    company_id: null,
    current_rental: {
      id: 1,
      vehicle_name: "Opel Astra",
      vehicle_image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
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
      <h1>User Profile</h1>
      <div className={styles.profile_info}>
        <div>
          <div>{userData.name}</div>
          <div>{userData.user_email}</div>
          <div>{userData.info}</div>
        </div>
        <FiEdit2 />
      </div>
      <div className={styles.current_booking}></div>
    </div>
  );
}

export default UserProfile;
