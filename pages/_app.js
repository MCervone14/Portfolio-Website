import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          lang="en"
          title="Portfolio"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
