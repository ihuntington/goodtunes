import Head from 'next/head'
import { Layout, Main, Aside } from '../components/Layout';
import { Copy, Title } from '../components/Typography';
import { Spacer } from '../components/Spacer';

const WtfContent = () => (
    <Main opaque>
        <Title color="violet">Why am I doing this?</Title>
        <Spacer />
        <Copy>I’m Ben<br />I’m Swiss<br />I’m 39<br />I’m a he<br />I’m gay<br />Hello.</Copy>
        <Copy>I came across Stonewall quite a while ago. Stonewall stands for lesbian, gay, bi, trans, queer, questioning and ace (LGBTQIA+) people everywhere. They believe in a world where all LGBTQIA+ people are free to be themselves and can live their lives to the full, and as equal to every other human. Campaigning as part of a global movement over the past 30 years, Stonewall UK helped create transformative change in the lives of LGBTQIA+ people across communities in the UK. Today, in the UK, we have equal rights to love, marry and have children, and our lives, families and relationships are represented as part of the national curriculum in most of the country.</Copy>
        <Copy>Even though I came out quite late to my family and my friends, I always felt I’ve been part of the lucky ones. I was brought up in a loving, supportive environment in Switzerland. I love my family and my friends and I feel that they love me back. I feel accepted.</Copy>
        <Copy>Since I can remember, my parents always said “you will meet someone one day, it could be a woman or a man, we will always love you the same.” When I was six or seven years old, I remember a trip to a local coffee shop to have an orange juice with my mother wearing her bra. She was also my official photographer once, when I made my very own Catwoman outfit. I’m aware these examples may come across a bit cliché to some, but in retrospect they are really meaningful to me. Without really understanding what it meant, she was creating a safe space for me to understand and explore who I am.</Copy>
        <Copy>I was 27 when I came out to my family. That week, my Dad decided to drive from Switzerland to London to bring me a couch. My partner and I had just moved into our new flat, we were surrounded by boxes and had no furniture. My dad, my partner and I pretty much all slept on the floor in our main room together. This was the most awkward yet amazing situation. I felt it was a real gesture to demonstrate he accepted us.</Copy>
    </Main>
);

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
                main={<WtfContent />}
            />
        </div>
    );
}