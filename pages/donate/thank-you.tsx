import { GetServerSideProps } from "next";
import Head from "next/head";
import { Layout, Aside, Main, Title, Spacer, Copy } from "../../components";
import { getDonationById, DonationResponse } from "../../services/justgiving";

interface IDonateThankYou {
    donation: DonationResponse;
}

const DonateThankYouContent: React.FC<{ donation: DonationResponse }> = ({ donation }) => {
    return (
        <Main opaque>
            <Title>Thank you {donation.donorDisplayName} for donating!</Title>
            <Spacer size={8} />
            <Copy>See your track on the marathon mix or how about having a listen too!</Copy>
        </Main>
    );
}

export default function DonateThankYou(props: IDonateThankYou) {
    return (
        <>
            <Head>
                <title>Thank you {props.donation.donorDisplayName} for donating</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                aside={<Aside hide />}
                main={<DonateThankYouContent donation={props.donation} />}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const donation = await getDonationById(query.jgDonationId as string);

    return {
        props: {
            donation,
        },
    };
};
