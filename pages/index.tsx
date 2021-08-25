import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BenImage from "../public/ben.jpg"

export default function Home() {
  return (
    <div className="container mx-auto h-full">
      <Head>
        <title>Good Tunes</title>
        <meta name="description" content="Good Tunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-2 h-full">
        <div className="grid md:grid-cols-12 md:gap-8 h-full">
          <div className="md:col-span-4 lg:col-span-3 bg-white">
            <div className="h-4"></div>
            <h1 className="text-5xl text-gt-blue">
              <span className="block border-b-8 border-gt-green py-1.5">Ben`s</span>
              <span className="block border-b-8 border-gt-green py-1.5">London</span>
              <span className="block border-b-8 border-gt-green py-1.5">Marathon</span>
              <span className="block border-b-8 border-gt-green py-1.5">Mix</span>
            </h1>
            <div className="h-8"></div>
            <div className="md:hidden">
              <Image src={BenImage} alt="Photo of Ben ready to run while wearing the Statue of Liberty crown" layout="responsive" />
            </div>
            <div className="h-8"></div>
            <p className="text-2xl">Use music and your wallet to support Ben as he runs for Stonewall.</p>
            <div className="h-8"></div>
            <Link href="/donate">
              <a className="inline-block bg-gt-blue text-2xl text-white p-4">Give money + music</a>
            </Link>
            <div className="h-4"></div>
            <Link href="/wtf">
              <a className="text-gt-blue">WTF am I doing this?</a>
            </Link>
            <div className="h-8"></div>
            <div className="h-2 bg-gt-blue"></div>
            <div className="h-8"></div>
            <p className="text-2xl">Ben`s reached</p>
            <div className="h-4"></div>
            <p className="text-gt-green text-5xl">$0</p>
            <div className="h-4"></div>
            <p>X days to go</p>
            <div className="h-8"></div>
          </div>
          <div className="md:col-span-8 lg:col-span-9 bg-gray-100 grid">
            <div className="grid grid-cols-1">
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 z-0">
                <div className="relative md:h-full">
                  <Image layout="fill" objectFit="cover" src={BenImage} alt="Photo of Ben ready to run while wearing the Statue of Liberty crown" />
                </div>
              </div>
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 z-10">
                <div className="md:p-5">
                  <div className="z-10">
                    <h2 className="text-5xl text-gt-blue">The Marathon Mix</h2>
                    <div className="h-8"></div>
                    <p>This is the main content area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
