import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopNav from "../src/components/TopNav";

const Home = () => (
  <div>
    <Head>
      <title>Estatery</title>
      {/*<meta name="description" content="Generated by create next app" />*/}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopNav />
  </div>
);
export default Home;
