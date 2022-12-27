import { getSortedArticlesData } from "../../lib/articles";
import Layout from "../../components/layout";
import Image from "next/image";
import PageHeading from "../../components/PageHeading";
import ArticlesList from "../../components/ArticlesList";
import Head from "next/head";

export default function Articles({ articles }: { articles: Article[] }) {
  return (<>
    <Head>
      <title>Articles</title>
      <meta name="description" content="These are my articles." />
      <meta property="og:title" content="Articles" />
    </Head>
    <Layout>
      <section className="text-center mt-[100px] ">
        <PageHeading>Articles</PageHeading>
      </section>
      <section>
        <div className="mx-auto max-w-[1050px]">
          <ArticlesList className="my-8" articles={articles} />
        </div>
      </section>
    </Layout></>);
}

export async function getStaticProps() {
  const articles = getSortedArticlesData();
  return {
    props: {
      articles
    }
  };
}