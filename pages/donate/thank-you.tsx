import { GetServerSideProps } from "next";
import Head from "next/head";
import { Layout, Aside, Main, Title, Spacer, Copy } from "../../components";
import { getDonationById, DonationResponse } from "../../services/justgiving";
import prisma from "../../lib/prisma";

interface IDonateThankYou {
    donation: DonationResponse;
}

const DonateThankYouContent: React.FC<{ donation: DonationResponse }> = ({ donation }) => {
    return (
        <Main opaque>
            <Title>Thank you for donating!</Title>
            <Spacer size={8} />
            <Copy>See your track on the marathon mix or how about having a listen too!</Copy>
        </Main>
    );
}

export default function DonateThankYou({ donation }: IDonateThankYou) {
    return (
        <>
            <Head>
                <title>Thank you for donating</title>
                <meta name="description" content="Good Tunes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout
                aside={<Aside hide />}
                main={<DonateThankYouContent donation={donation} />}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
    const { jgDonationId, spotifyId } = query;

    if (!jgDonationId || !spotifyId) {
        return {
            props: { donation: null },
        };
    }

    const jgDonation = await getDonationById(query.jgDonationId as string);

    if (!jgDonation) {
        return {
            props: { donation: null },
        };
    }

    const data = {
        justGivingDonationId: jgDonation.id,
        justGivingReference: jgDonation.thirdPartyReference,
        name: jgDonation.donorDisplayName,
        spotifyTrackId: spotifyId as string,
        amount: jgDonation.amount,
    };

    const { createdAt, ...donation } = await prisma.donation.upsert({
        create: data,
        update: data,
        where: {
            justGivingDonationId: jgDonation.id,
        },
    });



    return {
        props: {
            donation: {
                createdAt: new Date(createdAt).toISOString(),
                ...donation,
            },
        },
    };
};
