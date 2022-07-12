import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/containers/header/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Marcin Bieszka - portfolio</title>
        {/*TODO: Meta description*/}
        <meta name="description" content="" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo_sm.jpg" />
        <link
          href="/favicon_light.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon_dark.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
