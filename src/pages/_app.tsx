import React from "react";
import "../styles/globals.css";
import "../styles/caoursel.css";
import Header from "components/header/header";
import Footer from "components/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
