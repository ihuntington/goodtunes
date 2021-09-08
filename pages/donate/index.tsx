import Head from 'next/head'
import { Main, Title, Spacer, Search, CloseButton } from '../../components'

export default function Donate() {
    const pageTitle = "Donate a track";
    return (
        <Main opaque showLogo={false}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-hidden flex flex-col" style={{ height: "calc(100vh - 80px)" }}>
                <Title>{pageTitle}</Title>
                <CloseButton />
                <Spacer size={8} />
                <Search />
            </div>
        </Main>
    );
}