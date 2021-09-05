import Head from 'next/head'
import { Layout, Aside, Main, Title, Spacer, Search } from '../../components'

const DonateContent = () => {
    return (
        <Main opaque showLogo={false}>
            <div className="overflow-hidden flex flex-col" style={{ height: "calc(100vh - 80px)" }}>
                <Title>Donate a track</Title>
                <Spacer size={8} />
                <Search />
            </div>
        </Main>
    );
};

export default function Donate() {
    return (
        <>
            <Head>
                <title>Donate a track</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                aside={<Aside hide />}
                main={<DonateContent />}
            />
        </>
    );
}