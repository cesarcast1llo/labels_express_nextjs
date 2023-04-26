import Form from '@/components/Form';
import Prices from '@/components/Prices';
import PageSkeleton from '@/components/PageSkeleton';
import Warning from '@/components/Warning';

export default function Home() {
    return (
        <PageSkeleton firstPage="Payment" secondPage="FAQ">
            <Warning />
            <Prices />
            <Form />
        </PageSkeleton>
    );
}
