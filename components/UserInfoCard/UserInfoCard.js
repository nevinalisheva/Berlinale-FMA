import React from "react";
import styles from "./UserInfoCard.module.css";
import { FiEdit2 } from "react-icons/fi";

function UserInfoCard({ data }) {
  return (
    <div className={styles.profile_info}>
      <div>
        <div>{data.user_name}</div>
        <div>{data.user_email}</div>
        <div>{data.info}</div>
      </div>
      <FiEdit2 className={styles.icon} />
    </div>
  );
}

export default UserInfoCard;
