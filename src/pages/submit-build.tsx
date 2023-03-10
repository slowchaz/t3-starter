import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";


const SubmitBuildsPage: NextPage = () => {
  const createBuildMutation = trpc.builds.createBuild.useMutation();
  const [matchUp, setMatchUp] = useState("ZvT");
  const [build, setBuildOrder] = useState("");

  const router = useRouter();

  async function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
    });
    router.push("/builds");
  }

  return (
    <>
      <Head>
        <title>Submit a Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black dark:text-white dark:bg-gray-800">
        <h1>Submit a Build Order</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmitBuildOrder}>
          <label htmlFor="match-up-select">
            Match Up
          </label>
          <select value={matchUp} onChange={e => setMatchUp(e.target.value)} className="text-black" id="match-up-select" required>
            <option value="zvt">ZvT</option>
            <option value="zvp">ZvP</option>
            <option value="zvz">ZvZ</option>

            <option value="pvt">PvT</option>
            <option value="pvp">PvP</option>
            <option value="pvz">PvZ</option>

            <option value="tvt">TvT</option>
            <option value="tvp">TvP</option>
            <option value="tvz">TvZ</option>
          </select>

          <textarea
            required
            className="p-2 text-black"
            value={build}
            onChange={(e) => setBuildOrder(e.target.value)}
          />

          <button
            className="p-2 bg-white text-black"
          >submit</button>
        </form>
      </main>
    </>
  );
};

export default SubmitBuildsPage;