import React, { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import RentalDetailsCard from "../../components/RentalDetailsCard/RentalDetailsCard";
import UserInfoCard from "../../components/UserInfoCard/UserInfoCard";

function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [carDestination, setCarDestination] = useState(null);
  const [carData, setCarData] = useState(null);
  const [carVisible, setCarVisible] = useState(true);

  useEffect(() => {
    setUserId(location.pathname.split("/user/")[1]);
  }, []);

  useEffect(() => {
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
    console.log(carData);
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
        {carData && carData.is_active !== 0 && carVisible && (
          <div className={styles.current_booking}>
            <h2>Your next rental</h2>
            {carData && (
              <RentalDetailsCard
                data={carData}
                user_id={userId}
                destination={carDestination}
                setCarVisible={setCarVisible}
              />
            )}
          </div>
        )}
      </div>
    );
  }
  return <div className={styles.container}>You should not be here</div>;
}

export default UserProfile;
