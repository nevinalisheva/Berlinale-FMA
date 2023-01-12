
import { SessionProvider } from "next-auth/react";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import "../styles/globals.css";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navigation customer_logged_out />
      <Component {...pageProps} />
      <Footer  />
    </SessionProvider>


  );
}
