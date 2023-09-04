import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio Kookajoo: About</title>
        <meta name="description" content="Studio Kookajoo: About" />
        <meta property="og:title" content="Studio Kookajoo: About" />
        <meta property="og:description" content="Studio Kookajoo: About" />
        <meta property="og:url" content="https://kookajoo.com/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Studio Kookajoo</h1>
      </main>
    </div>
  );
}
