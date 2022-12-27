import { getSortedProjectsData } from "../lib/projects";
import Layout from "../components/layout";
import PageHeading from "../components/PageHeading";
import ProjectsList from "../components/ProjectsList";
import Head from "next/head";

export default function Projects({ projects }: { projects: Project[] }) {
  return (<>
    <Head>
      <title>Projects</title>
      <meta name="description" content="These are my programming projects." />
      <meta property="og:title" content="Projects" />
    </Head> 
    <Layout>
      <section className="text-center mt-[100px] ">
        <PageHeading>Projects</PageHeading>
      </section>
      <section>
        <div className="mx-auto max-w-[1050px]">
          <ProjectsList className="my-8" projects={projects} />
        </div>
      </section>
    </Layout>
  </>);
}

export async function getStaticProps() {
  const projects = getSortedProjectsData();
  return {
    props: {
      projects
    }
  };
}