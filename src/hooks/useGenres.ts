import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// To fetch genres from API
// const useGenres = () => useData<Genre>("/genres");

// To fetch genres from data folder
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
