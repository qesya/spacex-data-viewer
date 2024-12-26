"use client";

import { useEffect, useState } from "react";
import { fetchRockets, Rocket } from "@/utils/api";
import Card from "@/components/molecules/Card";
import Spinner from "@/components/atoms/Spinner";

export default function RocketsPage() {
  const [rockets, setRockets] = useState<Rocket[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchRockets(); // Correct usage inside an IIFE
      setRockets(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="p-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {rockets?.map((rocket) => (
        <Card
          key={rocket.id}
          title={rocket.name}
          description={rocket.description}
        />
      ))}
    </div>
  );
}
