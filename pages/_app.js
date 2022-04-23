//import '../styles/globals.css'
import Head from "next/head";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
