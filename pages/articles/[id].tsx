import { getSortedArticlesData, getAllArticlesIds, getArticleData } from "../../lib/articles";
import Date from "../../components/Date";
import Image from "next/image";
import ArticleText from "../../components/ArticleText";
import Layout from "../../components/layout";
import ArticlesList from "../../components/ArticlesList";
import SeeAllArticles from "../../components/SeeAllArticles";
import PageHeading from "../../components/PageHeading";
import Head from "next/head";

export default function Article({ article, articles }: { article: Article, articles: Article[] }) {
  return (<>
    <Head>
      <title>{article.title}</title>
      <meta name="description" content={article.description} />
      <meta property="og:title" content={article.title} />
    </Head>
    <Layout>
      <section className="text-center mt-[100px] px-4">
        <PageHeading>{article.title}</PageHeading>
        <p className="text-[16px] font-normal text-[#666666]"><Date dateString={article.date} /></p>
      </section>
      <section className="max-w-[644px] mx-auto mb-[100px] px-4">
        <Image src={`/articles/${article.thumbnail}`} className="rounded-2xl my-10" width={644} height={295} alt="Article Thumbnail" />
        <div className="h-[1px] max-w-[644px] bg-[#CECECE] mb-5" />
        <ArticleText contentHtml={article.contentHtml ?? ""} />
      </section>
      <section>
        <svg className="w-full h-full" width="1440" height="237" viewBox="0 0 1440 237" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M423.706 32.6097C230.34 -24.2912 0 12.997 0 12.997V236H1440V167.477C1440 167.477 1344 70.606 1033.5 117.223C723 163.84 617.071 89.5105 423.706 32.6097Z" fill="black" stroke="black"/>
        </svg>
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