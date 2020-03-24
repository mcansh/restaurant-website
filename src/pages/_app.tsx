import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "~/styles/index.css";

function App({ pageProps, Component }: AppProps) {
  return (
    <>
      <Head>
        <title>restaurant website</title>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
