import Hero from '@components/landing/Hero';
import Policy from '@components/landing/Policy';
import Settings from '@components/landing/Settings';
import Terms from '@components/landing/Terms';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <Hero />
      <Settings />
      <Policy />
      <Terms />
    </>
  );
};
export default Page;
