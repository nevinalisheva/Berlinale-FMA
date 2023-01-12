import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  // const inter = Inter({ subsets: ["latin"] });
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Head>
          <title>Berlinale Car Rent</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.container}>
          <li>
            <ul>Name: {session.user.name}</ul>
            <ul>Email: {session.user.email}</ul>
          </li>
          <button>I'm a Customer</button>
          <button>I'm a Company</button>
          <div className={styles.or}>OR</div>
          <button onClick={() => signOut()}>sign out</button>
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
