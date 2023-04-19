import Form from '@/components/Form';
import Prices from '@/components/Prices';
import PageSkeleton from '@/components/PageSkeleton';

export default function Home() {
    return (
        <PageSkeleton firstPage="Payment" secondPage="FAQ">
            <Prices />
            <Form />
        </PageSkeleton>
    );
}
