import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// To fetch platforms from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// To fetch platforms from data folder
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
export default usePlatforms;
