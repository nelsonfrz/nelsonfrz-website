import Layout from "../components/layout";
import Image from "next/image";
import LinkButton from "../components/LinkButton";
import ArticlesList from "../components/ArticlesList";
import { getSortedArticlesData } from "../lib/articles";
import SeeAllArticles from "../components/SeeAllArticles";
import ProjectsList from "../components/ProjectsList";
import { getSortedProjectsData } from "../lib/projects";
import SeeAllProjects from "../components/SeeAllProjects"
import AboutMe from "../components/AboutMe";
import Head from "next/head";

interface HomeProps {
  articles: Article[],
  projects: Project[]
}

export default function Home({ articles, projects }: HomeProps) {
  return (<>
    <Head>
      <title>@nelsonfrz</title>
      <meta name="description" content="I&apos;m a 15 year old boy located in Germany with a passion for Web Development. Ocassionally I write articles about Software Engineering, Web Development and anything else." />
      <meta property="og:title" content="@nelsonfrz" />
    </Head>
    <Layout>
      <section className="text-center my-[200px]">
        <h1 className="text-[64px] font-black leading-none p-2 max-lg:text-[42px]">
          <span className="text-gradient-black">Hello! I&apos;m a</span> <br />
          <span className="text-gradient-purple">Fullstack Web Developer</span> <br />
        </h1>
        <p className="max-w-2xl mx-auto text-[16px] font-normal text-[#666666]">I&apos;m a 15 year old boy located in Germany with a passion for Web Development. Ocassionally I write articles about Software Engineering, Web Development and anything else.</p>
        <LinkButton color="purple" className="mt-4 mr-2" url="/articles">Read Articles</LinkButton>
        <LinkButton color="white" className="mt-4 ml-2" url="/projects">View Projects</LinkButton>
      </section>
      <section>
        <svg className="w-full h-full" width="1440" height="237" viewBox="0 0 1440 237" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M423.706 32.6097C230.34 -24.2912 0 12.997 0 12.997V236H1440V167.477C1440 167.477 1344 70.606 1033.5 117.223C723 163.84 617.071 89.5105 423.706 32.6097Z" fill="black" stroke="black"/>
        </svg>
        <div className="w-full bg-black -mt-2 py-8 xl:py-0">
          <h2 className="text-white font-black text-5xl text-center">Articles</h2>
          <div className="mx-auto max-w-[1050px]">
            <ArticlesList className="my-8" articles={articles} />
          </div>
          <SeeAllArticles />
        </div>
        <svg className="w-full h-full" width="1440" height="121" viewBox="0 0 1440 121" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 121C873.091 23.5695 557.822 24.0581 0 121V-7.62939e-06H1440V121Z" fill="black"/>
        </svg>
      </section>
      <section className="py-8 xl:py-0">
        <h2 className="text-black font-black text-5xl text-center">Projects</h2>
        <div className="mx-auto max-w-[1050px]">
           <ProjectsList className="my-8" projects={projects} />
           <SeeAllProjects />
        </div>
      </section>
      <section>
        <svg className="w-full h-full" width="1440" height="121" viewBox="0 0 1440 121" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0C873.091 97.4305 557.822 96.9419 0 0V121H1440V0Z" fill="black"/>
        </svg>
        <AboutMe className="-mt-2 pt-8"/>
      </section>
    </Layout>
    </>);
}

export async function getStaticProps() {
  const articles = getSortedArticlesData().slice(0, 3);
  const projects = getSortedProjectsData().slice(0, 3);
  return {
    props: {
      articles,
      projects
    }
  };
}