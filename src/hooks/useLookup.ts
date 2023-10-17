// -> id / Hook ==> Entity

const useLookup = <T extends { id: number }, D extends { results: T[] }>(
  useHook: () => { data: D },
  id?: number
) => {
  const { data } = useHook();
  return data.results.find((i: T) => i.id === id);
};

export default useLookup;
