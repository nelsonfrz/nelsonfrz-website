import { getSortedArticlesData } from "../../lib/articles";
import Layout from "../../components/layout";
import Image from "next/image";
import PageHeading from "../../components/PageHeading";
import ArticlesList from "../../components/ArticlesList";
import Head from "next/head";

export default function Articles({ articles }: { articles: Article[] }) {
  return (<>
    <Head>
    <title>@nelsonfrz - Articles</title>
      <meta name="title" content="@nelsonfrz - Articles" />
      <meta name="description" content="Read my articles. I write about a wide range of topics including Fullstack Web Development, Software Engineering, and anything else that I want to write about or that I feel would be beneficial for others to read about." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nelsonfrz.vercel.app/articles" />
      <meta property="og:title" content="@nelsonfrz - Articles" /> 
      <meta property="og:description" content="Read my articles. I write about a wide range of topics including Fullstack Web Development, Software Engineering, and anything else that I want to write about or that I feel would be beneficial for others to read about." />
      <meta property="og:image" content="https://i.postimg.cc/VkYW6Q1G/image.png" />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://nelsonfrz.vercel.app/articles"/>
      <meta property="twitter:title" content="@nelsonfrz - Articles"/>
      <meta property="twitter:description" content="Read my articles. I write about a wide range of topics including Fullstack Web Development, Software Engineering, and anything else that I want to write about or that I feel would be beneficial for others to read about."/>
      <meta property="twitter:image" content="https://i.postimg.cc/VkYW6Q1G/image.png"></meta>
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