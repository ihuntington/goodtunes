import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { Layout, Aside } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout aside={<Aside hide={router.pathname != "/"} />}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
