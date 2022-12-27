import AboutMe from "../components/AboutMe";
import Layout from "../components/layout";
import Head from "next/head";
import ArchDown from "../components/ArchDown";

export default function About() {
  return (<>
    <Head>
      <title>About Me</title>
      <meta name="description" content="I&apos;m a 15 year old boy located in Germany with a passion for Web Development. Ocassionally I write articles about Software Engineering, Web Development and anything else." />
      <meta property="og:title" content="About Me" />
    </Head>
    <Layout>
      <AboutMe className="py-[100px]" />
      <ArchDown />
    </Layout></>);
}