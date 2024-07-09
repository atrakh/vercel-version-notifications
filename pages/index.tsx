import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const currentSha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
  const [productionSha, setProductionSha] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    async function getVersion() {
      try {
        const res = await fetch("/api/version");
        if (!res.ok) {
          throw new Error("Failed to fetch version information");
        } else {
          const data = await res.json();
          setProductionSha(data.sha);
        }
      } catch (e) {
        setError(true);
      }
    }
    getVersion();
  }, []);

  return (
    <div>
      <Head>
        <title>Version Notifications</title>
      </Head>
      Current SHA: {currentSha}
      <br />
      Production SHA:{" "}
      {error
        ? "Failed to fetch production version information. Check next.js logs for more information."
        : productionSha ?? "Loading..."}
    </div>
  );
}
