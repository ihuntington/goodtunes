import Head from "next/head";
import { TextLinkButton } from "../../components";

export default function Login() {
    return (
        <>
        <Head>
            <title>Login</title>
            <meta name="description" content="Good Tunes" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="p-8">
            <TextLinkButton href="/api/auth/spotify">Login with Spotify</TextLinkButton>
        </div>
        </>
    );
}
