import Head from 'next/head'
import Image from "next/image";
import { Main } from '../components'
import GoodTunesLogo from "../public/good-tunes-white-x2.png";

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Good Tunes</title>
        <meta name="description" content="Good Tunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden md:flex justify-center md:justify-end">
        <div style={{ width: "170px" }}>
          <Image src={GoodTunesLogo} alt="Good Tunes" />
        </div>
      </div>
    </Main>
  );
}
