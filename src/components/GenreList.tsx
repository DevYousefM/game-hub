import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  if (isLoading)
    return skeletons.map((genre) => <GenreListSkeleton key={genre} />);
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem
            _hover={{
              backgroundColor: "gray.700",
              cursor: "pointer",
            }}
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
