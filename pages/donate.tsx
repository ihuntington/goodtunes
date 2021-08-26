import Head from 'next/head'
import { Layout, Aside, Main, Title, Spacer, Search } from '../components'

const DonateContent = () => {

    return (
        <Main opaque>
            <Title>Donate a track</Title>
            <Spacer size={8} />
            <Search />
        </Main>
    );
};

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