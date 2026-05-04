import "../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { DM_Sans } from "next/font/google";
import { AppProps } from "next/app"; // Import AppProps
import { FaustProvider } from "@faustwp/core";
import "../styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  // Add AppProps type
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <div className={dmSans.variable}>
        <Component {...pageProps} key={router.asPath} />
      </div>
    </FaustProvider>
  );
}
