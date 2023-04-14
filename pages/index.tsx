import Head from "next/head";
import Footer from "../components/footer";
import Hero from "../components/hero";
import { companyData, marketingInfo } from "../contracts/company";

const Home: any = () => {
  const company: companyData = {
    companyName: "Studio Kookajoo",
  };

  const marketing: marketingInfo = {
    homepageUrl: "kookajoo.com",
  };

  return (
    <>
      <Head>
        <title>Studio Kookajoo</title>
        <meta name="description" content="Studio Kookajoo" />
        <meta property="og:title" content="Studio Kookajoo" />
        <meta property="og:description" content="Studio Kookajoo" />
        <meta property="og:url" content="https://kookajoo.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Footer company={company} marketing={marketing} />
    </>
  );
};

export default Home;
