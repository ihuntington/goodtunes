import Head from 'next/head'
import { Layout, Main, Aside } from '../components/Layout';
import { Copy, Title } from '../components/Typography';
import { Spacer } from '../components/Spacer';

const Content = () => (
    <Main opaque>
        <Title>The Marathon Mix</Title>
        <Spacer />
        <Copy>Minima quisquam tempore molestiae fuga impedit earum. Dolor facilis doloremque tempora voluptate. Rem rerum voluptas sint consequatur in minima eos ut.</Copy>
        <Copy>Et doloremque veniam ea quisquam eaque a nemo. Autem aut provident quae ut doloremque. Quos voluptatum dignissimos et alias quibusdam.</Copy>
        <Copy>Libero consectetur esse eius et. Neque nihil nobis eos magnam iste. Qui neque qui quia ea omnis. Aut aut deserunt adipisci optio qui accusamus sunt.</Copy>
    </Main>
)

export default function Wtf() {
    return (
        <div className="container mx-auto h-full">
            <Head>
                <title>WTF am I doing this?</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                aside={<Aside />}
                main={<Content />}
            />
        </div>
    );
}