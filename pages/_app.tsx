import React from "react";
import "../tailwind.css";
import { AppProps } from "next/app";
import Header from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>Alex Bruns</title>
      </head>
      <div className="relative w-full h-screen px-4 pt-12 pb-4 max-w-screen">
        <Component {...pageProps} />
      </div>
      <Header />
      <script> </script>
    </>
  );
}

export default App;
