import Head from 'next/head'
import Link from "next/link";
import { Layout, Main, Aside } from '../components/Layout';
import { Copy } from '../components/Typography';
import { Spacer } from '../components/Spacer';
import { TextLinkButton } from "../components/TextLinkButton";

const pageTitle = "Why am I doing this?";

const WhyContent = () => (
    <Main opaque>
        <h2 className="text-5xl text-gt-violet">{pageTitle}</h2>
        <Link href="/">
            <a className="text-gt-blue focus:text-gt-light-blue hover:text-gt-light-blue absolute top-2 right-2 md:top-4 md:right-4">
                <span className="sr-only">To the home page</span>
                <svg className="w-8 md:w-12" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="45.2409" y1="0.353553" x2="1.24085" y2="44.3536" stroke="currentColor" />
                    <line x1="44.5337" y1="44.3536" x2="0.533744" y2="0.353553" stroke="currentColor" />
                </svg>
            </a>
        </Link>
        <Spacer />
        <Copy>I’m Ben<br />I’m Swiss<br />I’m 39<br />I’m a he<br />I’m gay<br />Hello.</Copy>
        <Copy>I came across Stonewall quite a while ago. Stonewall stands for lesbian, gay, bi, trans, queer, questioning and ace (LGBTQIA+) people everywhere. They believe in a world where all LGBTQIA+ people are free to be themselves and can live their lives to the full, and as equal to every other human. Campaigning as part of a global movement over the past 30 years, Stonewall UK helped create transformative change in the lives of LGBTQIA+ people across communities in the UK. Today, in the UK, we have equal rights to love, marry and have children, and our lives, families and relationships are represented as part of the national curriculum in most of the country.</Copy>
        <Copy>Even though I came out quite late to my family and my friends, I always felt I’ve been part of the lucky ones. I was brought up in a loving, supportive environment in Switzerland. I love my family and my friends and I feel that they love me back. I feel accepted.</Copy>
        <Copy>Since I can remember, my parents always said “you will meet someone one day, it could be a woman or a man, we will always love you the same.” When I was six or seven years old, I remember a trip to a local coffee shop to have an orange juice with my mother wearing her bra. She was also my official photographer once, when I made my very own Catwoman outfit. I’m aware these examples may come across a bit cliché to some, but in retrospect they are really meaningful to me. Without really understanding what it meant, she was creating a safe space for me to understand and explore who I am.</Copy>
        <Copy>I was 27 when I came out to my family. That week, my Dad decided to drive from Switzerland to London to bring me a couch. My partner and I had just moved into our new flat, we were surrounded by boxes and had no furniture. My dad, my partner and I pretty much all slept on the floor in our main room together. This was the most awkward yet amazing situation. I felt it was a real gesture to demonstrate he accepted us.</Copy>
        <Spacer size={4} />
        <TextLinkButton href="/donate">Give money + music</TextLinkButton>
    </Main>
);

export default function Why() {
    return (
        <div className="container mx-auto h-full">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                aside={<Aside hide />}
                main={<WhyContent />}
            />
        </div>
    );
}