import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  // const inter = Inter({ subsets: ["latin"] });
  const { data: session } = useSession();
  const [iscompany, setIsCompany] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);

  const selectedValue = (e) => {
    e.preventDefault();
    setIsCompany(!iscompany);
    setIsCustomer(!isCustomer);
  };

  const convert = (issomthing) => {
    if (issomthing) {
      return 0;
    }
    return 1;
  };

  console.log(iscompany, isCustomer);
  console.log(session);
  if (session) {
    axios
      .post("/api/user/insertuser", {
        user_name: session.user.name,
        user_email: session.user.email,
        is_customer: convert(isCustomer),
        is_company: convert(iscompany),
        is_admin: 0,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  if (session) {
    return (
      <>
        <Head>
          <title>Berlinale Car Rent</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.container}>
          <ul>
            <li>Name: {session.user.name}</li>
            <li>Email: {session.user.email}</li>
          </ul>
          {/* <button onClick={() => setIsCustomer(1)}>I'm a Customer</button>
          <button onClick={() => setIsCompany(1)}>I'm a Company</button>
          <div className={styles.or}>OR</div>
          <button onClick={() => signOut()}>sign out</button> */}
          <select onChange={selectedValue}>
            <option value={"company"}>company</option>
            <option selected value={"customer"}>
              customer
            </option>
          </select>
          <div className="e-btn-group"></div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className={styles.container}>
        <p>sign in </p>
        <button onClick={() => signIn()}>sign in</button>
      </main>
    </>
  );
}
