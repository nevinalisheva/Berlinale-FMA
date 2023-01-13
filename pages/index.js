import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  // const inter = Inter({ subsets: ["latin"] });
  const { data: session } = useSession();
  const [isCustomer, setIsCustomer] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  // const handleRole = (e) => {
  //   if (e.target.value === "1") {
  //     setIsCompany(true);
  //     setIsCustomer(false);
  //   } else if (e.target.value === "0") {
  //     setIsCustomer(true);
  //     setIsCompany(false);
  //   }
  // };
  if (isCompany || isCustomer) {
    if (isCustomer) return "custumer";
    return isCompany; //
  }

  // const role = handleRole();
  console.log("compant:", isCompany, "customer:", isCustomer);
  // console.log(role, "selected role");
  // const addUser = async () => {
  //   const response = await fetch('/api/user/inseruser', {
  //     method: 'POST',
  //     body: JSON.stringify(),
  //     headers: {
  //       'content-Type'
  //     }
  //   })
  // }
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
          <div className="e-btn-group">
            <input
              onClick={handleRole}
              type="radio"
              id="radioleft"
              name="align"
              value="1"
            />
            <label className="e-btn" htmlFor="radioleft">
              company
            </label>

            <input
              onClick={handleRole}
              type="radio"
              id="radioright"
              name="align"
              value="0"
            />
            <label className="e-btn" htmlFor="radioright">
              customer
            </label>
          </div>
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
