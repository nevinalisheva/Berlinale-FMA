import "../styles/globals.css";
import Provider from "next-auth";
import { AppProps } from "next/app";
import { Session } from "next-auth";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
