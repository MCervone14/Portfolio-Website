import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-full h-full">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          lang="en"
          title="Portfolio"
        />
        <meta
          name="description"
          content="This is Michael Cervone's portfolio for front-end web development"
        />
        <title>Michael Cervone | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
