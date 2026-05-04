import "../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app"; // Import AppProps
import { FaustProvider } from "@faustwp/core";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/dm-sans/latin-700.css";
import "@fontsource/dm-sans/latin-900.css";
import "@fontsource/dm-sans/latin-400-italic.css";
import "@fontsource/dm-sans/latin-500-italic.css";
import "@fontsource/dm-sans/latin-600-italic.css";
import "@fontsource/dm-sans/latin-700-italic.css";
import "@fontsource/dm-sans/latin-900-italic.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Add AppProps type
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
