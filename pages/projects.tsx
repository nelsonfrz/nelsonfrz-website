import { getSortedProjectsData } from "../lib/projects";
import Layout from "../components/layout";
import PageHeading from "../components/PageHeading";
import ProjectsList from "../components/ProjectsList";
import Head from "next/head";

export default function Projects({ projects }: { projects: Project[] }) {
  return (<>
    <Head>
      <title>@nelsonfrz - Projects</title>
      <meta name="title" content="@nelsonfrz - Projects" />
      <meta name="description" content="View my projects. You can get a preview and see the sourcecode on GitHub." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nelsonfrz.vercel.app/projects" />
      <meta property="og:title" content="@nelsonfrz - Projects" /> 
      <meta property="og:description" content="View my projects. You can get a preview and see the sourcecode on GitHub." />
      <meta property="og:image" content="https://i.postimg.cc/L5nBTHqN/image.png" />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://nelsonfrz.vercel.app/projects"/>
      <meta property="twitter:title" content="@nelsonfrz - Projects"/>
      <meta property="twitter:description" content="View my projects. You can get a preview and see the sourcecode on GitHub."/>
      <meta property="twitter:image" content="https://i.postimg.cc/L5nBTHqN/image.png"></meta>
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