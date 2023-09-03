import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          lang="en"
          title="Portfolio"
        />
        <title>Michael Cervone | Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
