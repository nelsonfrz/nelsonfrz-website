import Layout from "../components/layout";
import PageHeading from "../components/PageHeading";
import Head from "next/head";

export default function PageNotFound() {
  return (<>
    <Head>
      <title>@nelsonfrz - 404</title>
      <meta name="title" content="@nelsonfrz - 404" />
      <meta name="description" content="Sorry, that page you are searching can't be found." />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="@nelsonfrz - 404" /> 
      <meta property="og:description" content="Sorry, that page you are searching can't be found." />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:title" content="@nelsonfrz - 404"/>
      <meta property="twitter:description" content="Sorry, that page you are searching can't be found.."/>
    </Head>
    <Layout>
      <div className="text-center pt-[10vh]">
        <PageHeading>404: Page not found.</PageHeading>
        <p>Sorry, that page you are searching can&apos;t be found.</p>
      </div>
    </Layout>
    </>);
}