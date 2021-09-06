import Head from "next/head";
import { Copy } from "../../components";

export default function Login() {
    return (
        <>
        <Head>
            <title>Login Success</title>
            <meta name="description" content="Good Tunes" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="p-8">
            <Copy>Success!</Copy>
        </div>
        </>
    );
}
