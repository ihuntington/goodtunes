import Head from 'next/head'
import Image from "next/image";
import { Aside, Layout, Main } from '../components'
import GoodTunesLogo from "../public/good-tunes-white-x2.png";

const HomeContent = () => (
  <Main>
    <div className="hidden md:flex justify-center md:justify-end">
      <div style={{ width: "170px" }}>
        <Image src={GoodTunesLogo} alt="Good Tunes" />
      </div>
    </div>
  </Main>
);

export default function Home() {
  return (
    <div className="container mx-auto h-full">
      <Head>
        <title>Good Tunes</title>
        <meta name="description" content="Good Tunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        aside={<Aside />}
        main={<HomeContent />}
      />
    </div>
  )
}
