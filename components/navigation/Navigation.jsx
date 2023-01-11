import React, { useState } from "react";
import styles from "./navigation.module.css";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { MdAccountCircle, MdLogout, MdOutlineLogin } from "react-icons/md";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={styles.container}>
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
            {isLoggedIn ? (
              <>
                <li>
                  Account
                  <MdAccountCircle className={styles.burger_logo} />
                </li>
                <li onClick={() => setIsLoggedIn(false)}>
                  LogOut <MdLogout className={styles.burger_logo} />
                </li>
              </>
            ) : (
              <li onClick={() => setIsLoggedIn(true)}>
                LogIn <MdOutlineLogin className={styles.burger_logo} />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
