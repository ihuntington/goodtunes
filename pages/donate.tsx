import Head from 'next/head'
import { Layout, Aside, Main } from '../components'

const DonateContent = () => (
    <Main opaque>
        <p>Donate</p>
    </Main>
);

export default function Donate() {
    return (
        <div className="container mx-auto h-full">
            <Head>
                <title>Donate a track</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                aside={<Aside />}
                main={<DonateContent />}
            />
        </div>
    );
}