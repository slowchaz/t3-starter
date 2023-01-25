import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { trpc } from "../utils/trpc";


const Home: NextPage = () => {
  const createBuildMutation = trpc.builds.createBuild.useMutation();
  const [matchUp, setMatchUp] = useState("ZvT");
  const [build, setBuild] = useState("");

  async function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
    });
  }

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
      </main>
    </>
  );
};

export default Home;