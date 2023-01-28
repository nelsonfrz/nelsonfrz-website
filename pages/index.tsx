import Layout from "../components/layout";
import LinkButton from "../components/LinkButton";
import ArticlesList from "../components/ArticlesList";
import { getSortedArticlesData } from "../lib/articles";
import SeeAllArticles from "../components/SeeAllArticles";
import ProjectsList from "../components/ProjectsList";
import { getSortedProjectsData } from "../lib/projects";
import SeeAllProjects from "../components/SeeAllProjects"
import AboutMe from "../components/AboutMe";
import Head from "next/head";
import WaveUp from "../components/WaveUp";
import ArchUp from "../components/ArchUp";
import ArchDown from "../components/ArchDown";

interface HomeProps {
  articles: Article[],
  projects: Project[]
}

export default function Home({ articles, projects }: HomeProps) {
  return (<>
    <Head>
      <title>@nelsonfrz - Home</title>
      <meta name="title" content="@nelsonfrz - Home" />
      <meta name="description" content="I&apos;m a Software Engineer located in Germany. Ocassionally I write articles about Software Engineering, Web Development and anything else." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nelsonfrz.vercel.app/" />
      <meta property="og:title" content="@nelsonfrz - Home" /> 
      <meta property="og:description" content="I&apos;m a 15 year old boy located in Germany with a passion for Software Engineering. Ocassionally I write articles about Software Engineering, Web Development and anything else." />
      <meta property="og:image" content="https://i.postimg.cc/ZYVMxRQF/image.png" />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://nelsonfrz.vercel.app/"/>
      <meta property="twitter:title" content="@nelsonfrz - Home"/>
      <meta property="twitter:description" content="I&apos;m a 15 year old boy located in Germany with a passion for Software Engineering. Ocassionally I write articles about Software Engineering, Web Development and anything else."/>
      <meta property="twitter:image" content="https://i.postimg.cc/ZYVMxRQF/image.png"></meta>
    </Head>
    <Layout>
      <section className="text-center my-[200px]">
        <h1 className="text-[100px] font-black leading-none p-2 max-lg:text-[80px] max-sm:text-[48px]">
          <span className="text-gradient-black">Hello! I&apos;m a</span> <br />
          <span className="text-gradient-purple-animated">Software Engineer</span> <br />
        </h1>
        <p className="max-w-2xl mx-auto text-[16px] font-normal text-[#666666]">I&apos;m a 15 year old boy located in Germany with a passion for Software Engineering. Ocassionally I write articles about Software Engineering, Web Development and anything else.</p>
        <LinkButton color="purple" className="mt-4 mr-2" url="/articles">Read Articles</LinkButton>
        <LinkButton color="white" className="mt-4 ml-2" url="/projects">View Projects</LinkButton>
      </section>
      <section>
        <WaveUp />
        <div className="w-full bg-black py-8 xl:py-0">
          <h2 className="text-white font-black text-5xl text-center">Articles</h2>
          <div className="mx-auto max-w-[1050px]">
            <ArticlesList className="my-8" articles={articles} />
          </div>
          <SeeAllArticles />
        </div>
        <ArchDown />
      </section>
      <section className="py-8 xl:py-0">
        <h2 className="text-black font-black text-5xl text-center">Projects</h2>
        <div className="mx-auto max-w-[1050px]">
           <ProjectsList className="my-8" projects={projects} />
           <SeeAllProjects />
        </div>
      </section>
      <section>
        <ArchUp />
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
