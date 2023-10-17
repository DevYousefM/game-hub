import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// To fetch genres from API
// const useGenres = () => useData<Genre>("/genres");
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: { count: 0, next: null, results: genres },
  });
};

// To fetch genres from data folder
// const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
