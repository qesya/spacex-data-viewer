"use client";

import { useEffect, useState } from "react";
import { fetchLaunches, Launch } from "@/utils/api";
import Card from "@/components/molecules/Card";
import Spinner from "@/components/atoms/Spinner";

export default function LaunchPage() {
  const [launches, setLaunches] = useState<Launch[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchLaunches(); // Correct usage inside an IIFE
      setLaunches(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="p-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {launches?.slice(0, 10).map((launch) => (
        <Card
          key={launch.id}
          title={launch.name}
          description={launch.details || "No details available."}
        />
      ))}
    </div>
  );
}
