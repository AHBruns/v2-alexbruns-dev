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
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism-funky.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col w-screen h-screen">
        <Header />
        <div className="relative flex-1 w-full">
          <div className="absolute inset-0 overflow-hidden">
            <div className="flex flex-col max-h-full overflow-y-auto">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
        {/* <div className="relative w-full max-h-0">
          <div className="absolute top-0 bottom-0 right-0 z-40 w-16 h-16 bg-orange-500" />
        </div>
        <div className="relative flex-grow flex-shrink w-full overflow-y-auto">
          
        </div>
        <div className="relative w-full max-h-0">
          <div className="absolute bottom-0 left-0 z-40 w-16 h-16 bg-orange-500" />
          <div className="absolute bottom-0 right-0 z-40 w-16 h-16 bg-orange-500" />
        </div> */}
        {/* <Component {...pageProps} /> */}
      </div>
      <script> </script>
    </>
  );
}

//<div className="relative w-full h-screen px-4 pt-12 pb-4 max-w-screen">
//  {/* <Component {...pageProps} /> */}
//</div>;

export default App;
