import AboutMe from "../components/AboutMe";
import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
  return (<>
    <Head>
      <title>About Me</title>
      <meta name="description" content="I&apos;m a 15 year old boy located in Germany with a passion for Web Development. Ocassionally I write articles about Software Engineering, Web Development and anything else." />
      <meta property="og:title" content="About Me" />
    </Head>
    <Layout>
      <AboutMe className="py-[100px]" />
      <svg className="w-full h-full" width="1440" height="121" viewBox="0 0 1440 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 121C873.091 23.5695 557.822 24.0581 0 121V-7.62939e-06H1440V121Z" fill="black"/>
      </svg>
    </Layout></>);
}