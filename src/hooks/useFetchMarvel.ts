import { useState, useEffect } from "react";
import { HeroesDTO } from "./model";

import api from "../services/api";

async function handleFetchHeroes(page: number) {
  const response = await api.get("/characters", {
    params: {
      page,
    },
  });

  return response;
}

export function useFetchHeroes() {
  const [data, setData] = useState<HeroesDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  function nextPage() {
    if (loading) return;
    setPage((prevState) => prevState + 1);
  }

  useEffect(() => {
    async function fetchHeroes() {
      setLoading(true);
      try {
        const response = await handleFetchHeroes(page);
        setData((prevHeroes) => [...prevHeroes, ...response.data.data.results]);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }
    fetchHeroes();
  }, [page]);

  return { data, loading, error, nextPage };
}
