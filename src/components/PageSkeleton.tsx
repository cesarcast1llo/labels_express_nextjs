import React from 'react';
import Head from 'next/head';
import Menu from '@/components/Menu';

interface Props {
    children: React.ReactNode;
}

const PageSkeleton: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Labels Express</title>
                <meta name="description" content="Simple site generating labels at a fraction of the cost" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="labelsExpress">
                <div className="wrapper">
                    <Menu firstPage={'FAQ'} secondPage={'Payment'} />
                    {children}
                </div>
            </div>
        </>
    );
};
export default PageSkeleton;
