import React, { useState } from "react";
import styles from "./UserProfile.module.css";
import { useRouter } from "next/router";

function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [userId] = useState(id);

  return (
    <div className={styles.container}>
      <h1>User Profile</h1>
    </div>
  );
}

export default UserProfile;
