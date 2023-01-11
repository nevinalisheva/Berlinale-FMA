import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  // const inter = Inter({ subsets: ["latin"] });
  const [session, loading] = useSession();
  if (session) {
    return (
      <>
        <Head>
          <title>Berlinale Car Rent</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          {/* signed in as : {session.user.email}; */}
          <button onClick={() => signOut()}>sign out</button>
          <div>möp</div>
        </main>
      </>
    );
  }
  return (
    <>
      <p>sign in </p>
      <button onClick={() => signIn()}>sign in </button>
    </>
  );
}
