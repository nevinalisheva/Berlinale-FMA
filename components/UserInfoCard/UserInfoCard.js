import React from "react";
import styles from "./UserInfoCard.module.css";
import { FiEdit2 } from "react-icons/fi";
import { useSession } from "next-auth/react";

function UserInfoCard({ data }) {
  const { data: session } = useSession();

  return (
    <div className={styles.profile_info}>
      <div>
        {/* <div>{session.user.name}</div>
        <div>{session.user.email}</div> */}
        <div>{data.info}</div>
      </div>
      <FiEdit2 className={styles.icon} />
    </div>
  );
}

export default UserInfoCard;
