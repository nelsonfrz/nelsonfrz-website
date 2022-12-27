import { getSortedArticlesData, getAllArticlesIds, getArticleData } from "../../lib/articles";
import Date from "../../components/Date";
import Image from "next/image";
import ArticleText from "../../components/ArticleText";
import Layout from "../../components/layout";
import ArticlesList from "../../components/ArticlesList";
import SeeAllArticles from "../../components/SeeAllArticles";
import PageHeading from "../../components/PageHeading";
import Head from "next/head";
import WaveUp from "../../components/WaveUp";

export default function Article({ article, articles }: { article: Article, articles: Article[] }) {
  return (<>
    <Head>
      <meta name="title" content={article.title} />
      <meta name="description" content={article.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://nelsonfrz.vercel.app/articles/${article.id}`} />
      <meta property="og:title" content={article.title} /> 
      <meta property="og:description" content={article.description} />
      <meta property="og:image" content={`https://nelsonfrz.vercel.app/articles/${article.thumbnail}`} />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`https://nelsonfrz.vercel.app/articles/${article.id}`} />
      <meta property="twitter:title" content={article.title} />
      <meta property="twitter:description" content={article.description} />
      <meta property="twitter:image" content={`https://nelsonfrz.vercel.app/articles/${article.thumbnail}`} ></meta>
    </Head>
    <Layout>
        <section className="text-center mt-[100px] px-4">
          <PageHeading>{article.title}</PageHeading>
          <p className="text-[16px] font-normal text-[#666666]"><Date dateString={article.date} /></p>
        </section>
        <section className="max-w-[644px] mx-auto mb-[100px] px-4">
          <Image src={`/articles/${article.thumbnail}`} className="rounded-2xl mt-10" width={644} height={295} alt="Article Thumbnail" />
          {(article.thumbnailSourceUrl && article.thumbnailSourceName) &&(
            <p className="mt-2 mb-5 text-[14px]">Photo from <a href={article.thumbnailSourceUrl} className="text-[#4F46E5] hover:cursor-pointer" target="_blank" rel="noreferrer">{article.thumbnailSourceName}</a></p>
          )}
          <div className="h-[1px] max-w-[644px] bg-[#CECECE] mb-5" />
          <ArticleText content={article.content} />
        </section>
        <section>
          <WaveUp />
          <div className="w-full py-12 bg-black -mt-2">
            <div className="mx-auto max-w-[1050px]">
              <h2 className="text-white font-black text-3xl text-center">You may also like</h2>
              <ArticlesList className="my-8" articles={articles} />
            </div>
            <SeeAllArticles />
          </div>
        </section>
    </Layout></>);
}

export async function getStaticPaths() {
  const paths = getAllArticlesIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { id: string }}) {
  const article = await getArticleData(params.id);
  const articles = getSortedArticlesData().filter(_article => _article.id !== article.id).slice(0, 3); 
  return {
    props: {
      article,
      articles
    }
  };
}