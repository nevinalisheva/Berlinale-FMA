import React, { use, useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import dummyImage from "../../assets/dummy.jpg";
import RentalDetailsCard from "../../components/RentalDetailsCard/RentalDetailsCard";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";

function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [carDestination, setCarDestination] = useState(null);
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    setUserId(location.pathname.split("/user/")[1]);
  }, []);

  useEffect(() => {
    console.log(userId);
    if (userId) {
      axios
        .get(`/api/user/${userId}`)
        .then((response) => setUserData(response.data[0]))
        .catch((err) => console.log(err));

      axios
        .get(`/api/rent/${userId}`)
        .then((response) => setCarData(response.data[0]))
        .catch((err) => console.log(err));
    }
  }, [userId]);

  useEffect(() => {
    if (carData) {
      axios
        .get(`/api/locations/destination/${carData.vehicle_id}`)
        .then((response) => setCarDestination(response.data[0]))
        .catch((err) => console.log(err));
    }
  }, [carData]);

  if (userId) {
    return (
      <div className={styles.container}>
        {userData && (
          <>
            <h1>{userData.is_admin ? "Admin" : "User"} Profile</h1>
            <UserInfoCard data={userData} />
          </>
        )}
        <div className={styles.current_booking}>
          <h2>Your next rental</h2>
          {carData && (
            <RentalDetailsCard
              data={carData}
              user_id={userId}
              destination={carDestination}
            />
          )}
        </div>
      </div>
    );
  }
  return <div className={styles.container}>You shouldn't be here</div>;
}

export default UserProfile;
