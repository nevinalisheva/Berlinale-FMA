import { SessionProvider } from "next-auth/react";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import "../styles/globals.css";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className="grid_main_wrapper">
        <Navigation customer_logged_out />
        <Component {...pageProps} />
      </div>
      <div className="grid_footer">
        <Footer />
      </div>
    </SessionProvider>
  );
}
