import React from "react";
import "../styles/globals.css";
import "../styles/caoursel.css";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import SalesIQ from "components/SalesIQ";
import FloatPhone from "components/floatPhone";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Loading from "components/loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-5462HX7" });
  }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="hNa9hsmI-YwrJiMxo0FR7-5PWn2ku2yqn3OD6VoVFms"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-681967532"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-681967532');
            `,
          }}
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div className="selection:bg-brandBlue selection:text-white">
          <Header />
          <main className="min-h-screen text-justify">
            <Component {...pageProps} />
          </main>
          <SalesIQ />
          <FloatPhone />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default MyApp;
