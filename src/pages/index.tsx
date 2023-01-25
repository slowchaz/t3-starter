import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Welcome!</h1>
        <Link href="/submit-build">Submit a new build</Link>
        <Link href="/builds">View Builds</Link>
      </main>
    </>
  );
};

export default Home;