import Head from 'next/head'
import {DEFAULT_TITLE} from "../../lib/constants";
import Favicon from "./favicon";

export default function Meta() {
    return (
        <>
            <Favicon/>
            <Head>
                <title>{DEFAULT_TITLE}</title>
            </Head>
        </>
    )
};
