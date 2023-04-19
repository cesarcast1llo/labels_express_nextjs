import Head from 'next/head';
import Form from '@/components/Form';
import Prices from '@/components/Prices';
import PageSkeleton from '@/components/PageSkeleton';

export default function Home() {
    return (
        <PageSkeleton>
            <Prices />
            <Form />
        </PageSkeleton>
    );
}
