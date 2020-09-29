import React from "react";
import "../tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alex Bruns</title>
      </Head>
      <div className="flex flex-col w-screen h-screen">
        <Header />
        <div className="relative flex-1 w-full">
          <div className="absolute inset-0 overflow-hidden">
            <div className="flex flex-col h-full max-h-full overflow-y-auto">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
      <script> </script>
    </>
  );
}

export default App;
