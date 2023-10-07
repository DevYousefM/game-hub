import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton boxSize="32px" borderRadius={8} />
          <SkeletonText boxSize="60%" noOfLines={1} skeletonHeight={4} />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
