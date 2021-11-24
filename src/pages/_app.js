import React from "react";
import "../../styles/globals.css";
import Head from "next/head";
import { ChakraProvider, resetCSS } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Router from "next/router";
import { Skeleton } from "@chakra-ui/react";

import "@fontsource/lato";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Head>
        <title>dashboard</title>
      </Head>
      <ChakraProvider resetCSS>
        <Layout>
          {loading ? (
            <Skeleton>
              <Component {...pageProps} />
            </Skeleton>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
