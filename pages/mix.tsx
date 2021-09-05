import Head from 'next/head'
import { Aside, Layout, Main } from '../components'

const MixContent = () => (
  <Main opaque>
    <h2 className="text-5xl text-gt-violet">The Marathon Mix</h2>
  </Main>
);

export default function Mix() {
  return (
    <>
      <Head>
        <title>The Marathon Mix</title>
        <meta name="description" content="Good Tunes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        aside={<Aside />}
        main={<MixContent />}
      />
    </>
  );
}
