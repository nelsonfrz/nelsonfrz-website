import Layout from "../components/layout";
import PageHeading from "../components/PageHeading";

export default function PageNotFound() {
  return (
    <Layout>
      <div className="text-center pt-[10vh]">
        <PageHeading>404: Page not found.</PageHeading>
        <p>Sorry, that page you are searching can&apos;t be found.</p>
      </div>
    </Layout>
  );
}