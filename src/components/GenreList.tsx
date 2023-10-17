import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bg = useColorModeValue("gray.100", "gray.700");

  if (error) return null;
  if (isLoading)
    return (
      <>
        <Heading marginBottom={4} marginTop={2} fontSize="2xl">
          Genres
        </Heading>
        {skeletons.map((genre) => (
          <GenreListSkeleton key={genre} />
        ))}
      </>
    );
  return (
    <>
      <Heading marginBottom={4} marginTop={2} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem
            _hover={{
              backgroundColor: bg,
              cursor: "pointer",
            }}
            backgroundColor={
              selectedGenre && selectedGenre.id == genre.id ? bg : "transparent"
            }
            onClick={() => {
              onSelectGenre(genre);
            }}
            key={genre.id}
            padding="5px"
            borderRadius={6}
          >
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
