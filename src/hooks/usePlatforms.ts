import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// To fetch platforms from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: { count: 0, next: null, results: platforms },
  });

// To fetch platforms from data folder
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
export default usePlatforms;
