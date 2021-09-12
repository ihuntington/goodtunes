import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { useEffect, useState } from "react";
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import FontFaceObserver from "fontfaceobserver";
import { Layout, Aside } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [hasFont, setHasFont] = useState(false);

  useEffect(() => {
    if(typeof window != "undefined") {
      const font = new FontFaceObserver("Founders Grotesk", {
        weight: 300,
      });

      font.load().then(() => {
        setHasFont(true);
      });
    }
  }, []);

  return (
    <Layout aside={<Aside hide={router.pathname != "/"} />} hasFont={hasFont}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
