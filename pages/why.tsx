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
        <Copy>I have a very loving bond with my brother, incredible friends and I’ve been in a relationship with the most amazing man for the last 14 years. All of this to say I do feel lucky, yet society makes it so hard for me and those part of the LGBTQIA+ community to feel free and fully be ourselves. Gay shame is real. Sometimes I watch iconic movies from the 80s with my adult eyes and I’m amazed how many micro agressions there are against gay people. Lots of continuous subtle (sometimes not so subtle) agressions that makes us internalise so deeply this shame and makes us closet who we are with this fear of not fitting in. I HAD to come out. I decided to relocate to a place I felt I would be able to thrive - London. That said, I have been insulted in the street by random men, I’ve been in a long term relationship, yet to this day we still rarely kiss or show any signs of public affection, I feel uneasy in some places and there are places in the world I would never dare to visit because of the anti LGBTQIA+ politics or because my life could potentially be at risk. As a gay man I am conditioned by society to make myself small, not make a thing about being gay and be grateful to feel accepted. Today, it is still illegal by law to be gay in 70 countries and punishable by death in 12. Same sex-mariage is recognised in only 29 countries (not Switzerland, my homeland!!!!). This is still so shocking to me.</Copy>
        <Copy>So I do run a fair bit :) Running is my escapism. It’s the time I use to feel present. It’s a bit like mediation. When I run I feel like myself, I feel peaceful. This year I feel so privileged and honoured to run the 2021 London Marathon and fundraise for Stonewall UK to help them with their amazing work towards a brighter and equitable future for my community.</Copy>
        <Copy>This is my story, and one that I’m sure lots of you can relate to. I want to share this experience and use it to help raise awareness, support and funds for such a vital organisation like Stonewall, to help them help others that haven’t got the support structures I’ve had and more. With the big day approaching, 3rd October I need your help. I appreciate these are challenging times, and a lot of people are asking for a lot of support. If you do happen to find some coins down the back of the sofa, or have some hard earned cash that you’d like to throw in the pot, go for it! As well as your generous donation, add your best tune to my marathon playlist to power me through and help me stagger over that finish line. I will be forever grateful.</Copy>
        <Copy>Donate through this link: <Link href="/donate"><a className="text-gt-blue focus:text-gt-light-blue hover:text-gt-light-blue underline">Give money + music</a></Link></Copy>
        <Copy>Thank you so so much. And thank you to everyone who previously supported me, you’re a big part of why I do this.</Copy>
        <Copy>Y<br />O<br />U<br /><br />A<br />R<br />E<br /><br />T<br />H<br />E<br /><br />B<br />E<br />S<br />T<br /><br />X</Copy>
        <Copy>Ben, Suisse, 39 ans, Lui, Gay.</Copy>
        <Spacer size={4} />
        <TextLinkButton href="/donate">Give money + music</TextLinkButton>
    </Main>
);

export default function Why() {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                aside={<Aside hide />}
                main={<WhyContent />}
            />
        </>
    );
}
