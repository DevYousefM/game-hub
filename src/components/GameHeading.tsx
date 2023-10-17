import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres, { Genre } from "../hooks/useGenres";
import useLookup from "../hooks/useLookup";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { FetchResponse } from "../services/api-client";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useLookup<Genre, FetchResponse<Genre>>(
    useGenres,
    gameQuery.genreId
  );
  const platform = useLookup<Platform, FetchResponse<Platform>>(
    usePlatforms,
    gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={6}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
