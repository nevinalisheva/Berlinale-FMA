import React, { useState } from "react";
import styles from "./navigation.module.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import Image from "next/image";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navigation}>
          <AiOutlineCar className={styles.burger_logo} />
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
                <li>Account</li>
                <li onClick={() => setIsLoggedIn(false)}>LogOut</li>
              </>
            ) : (
              <li onClick={() => setIsLoggedIn(true)}>LogIn</li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
