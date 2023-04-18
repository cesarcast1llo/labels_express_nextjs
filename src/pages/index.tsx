import Head from 'next/head';
import Form from '@/components/Form';
import Menu from '@/components/Menu';
import Prices from '@/components/Prices';

export default function Home() {
    return (
        <>
            <Head>
                <title>Labels Express</title>
                <meta name="description" content="Simple site generating labels at a fraction of the cost" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="Home">
                <Menu firstPage={'FAQ'} secondPage={'Payment'} />
                <div className="wrapper">
                    <Prices />
                    <Form />
                </div>
            </div>
        </>
    );
}
