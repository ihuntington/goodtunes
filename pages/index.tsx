import Head from 'next/head'
import Image from "next/image";
import { Aside, Layout, Main } from '../components'
import LogoNavy from "../public/logo-navy.png";

const HomeContent = () => (
  <Main>
    <div className="flex justify-center md:justify-end">
      <Image src={LogoNavy} alt="Good Tunes" />
    </div>
    <div className="h-4 md:h-0"></div>
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
