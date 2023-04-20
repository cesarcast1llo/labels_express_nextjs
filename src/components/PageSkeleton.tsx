import React from 'react';
import Head from 'next/head';
import Menu from '@/components/Menu';
import { Analytics } from '@vercel/analytics/react';

type PageSkeletonProps = React.PropsWithChildren<{
    children: React.ReactNode;
    firstPage: string;
    secondPage: string;
}>;

const PageSkeleton: React.FC<PageSkeletonProps> = ({ children, firstPage, secondPage }) => {
    return (
        <>
            <Head>
                <title>Labels Express</title>
                <meta name="description" content="Simple site generating labels at a fraction of the cost" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Analytics />
            <div className="labelsExpress">
                <div className="wrapper">
                    <Menu firstPage={firstPage} secondPage={secondPage} />
                    {children}
                </div>
            </div>
        </>
    );
};
export default PageSkeleton;
