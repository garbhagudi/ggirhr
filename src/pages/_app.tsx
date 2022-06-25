import React from "react";
import "../styles/globals.css";
import "../styles/caoursel.css";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import SalesIQ from "components/SalesIQ";
import FloatPhone from "components/floatPhone";
import * as ga from "../lib/google-analytics";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("512213833167180");
        ReactPixel.pageView();
        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
          return () => {
            router.events.off("routeChangeComplete", () => {
              ReactPixel.pageView();
            });
          };
        });
      });
  }, [router.events]);
  return (
    <div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ADS_CONVERSION_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
      </Script>
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ADS_CONVERSION_ID}');
        `}
      </Script>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <SalesIQ />
      <FloatPhone />
      <Footer />
    </div>
  );
}

export default MyApp;
