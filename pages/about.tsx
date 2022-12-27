import AboutMe from "../components/AboutMe";
import Layout from "../components/layout";
import Head from "next/head";
import ArchDown from "../components/ArchDown";

export default function About() {
  return (<>
    <Head>
      <title>@nelsonfrz - About</title>
      <meta name="title" content="@nelsonfrz - About" />
      <meta name="description" content="I&apos;m a 15 year old boy located in Germany with a passion for Web Development. Ocassionally I write articles about Software Engineering, Web Development and anything else." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nelsonfrz.vercel.app/about" />
      <meta property="og:title" content="@nelsonfrz - About" /> 
      <meta property="og:description" content="I&apos;m a 15 year old boy located in Germany with a passion for Web Development. Ocassionally I write articles about Software Engineering, Web Development and anything else." />
      <meta property="og:image" content="https://i.postimg.cc/Jh5q7YVc/image.png" />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://nelsonfrz.vercel.app/about"/>
      <meta property="twitter:title" content="@nelsonfrz - About"/>
      <meta property="twitter:description" content="I&apos;m a 15 year old boy located in Germany with a passion for Web Development. Ocassionally I write articles about Software Engineering, Web Development and anything else."/>
      <meta property="twitter:image" content="https://i.postimg.cc/Jh5q7YVc/image.png"></meta>
    </Head>
    <Layout>
      <AboutMe className="py-[100px]" />
      <ArchDown />
    </Layout></>);
}