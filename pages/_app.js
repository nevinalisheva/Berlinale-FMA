
import Navigation from "../components/navigation/Navigation";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation customer_logged_out />
      <Component {...pageProps} />
    </>
  );
}
