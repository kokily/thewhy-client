import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="커뮤니케이션,서비스,온라인교육,동영상교육,리더교육,더와이,직무역량교육,성과관리,김영화강사,교육컨설팅"
        />
        <link rel="canonical" href="https://thewhy.kr" />
      </Head>
      <PageTemplate>MainImage</PageTemplate>
    </>
  );
};

export default IndexPage;
