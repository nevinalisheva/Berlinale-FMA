import React, { useState } from "react";
import styles from "./navigation.module.css";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { MdAccountCircle, MdLogout, MdOutlineLogin } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react";

import nextAuth from "next-auth";
function Navigation({ userID = 1 }) {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navigation}>
        <Link href={isLoggedIn ? "/vehicles" : "/"}>
          <AiOutlineCar className={styles.burger_logo} />
        </Link>

        <div
          className={styles.burger_menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdClose className={styles.burger_logo} />
          ) : (
            <FiMenu className={styles.burger_logo} />
          )}
        </div>
      </div>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.link_list}>
          {session ? (
            <>
              <Link href={`/vehicles`}>
                <li>
                  <button>
                    Find a Car
                    <AiOutlineCar />
                  </button>
                </li>
              </Link>
              <Link href={`/user/${userID}`}>
                <li>
                  Account
                  <MdAccountCircle className={styles.burger_logo} />
                </li>
              </Link>
              <li onClick={() => signOut()}>
                LogOut <MdLogout className={styles.burger_logo} />
              </li>
            </>
          ) : (
            <li onClick={() => signIn(true)}>
              LogIn <MdOutlineLogin className={styles.burger_logo} />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
