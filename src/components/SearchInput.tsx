import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const searchText = ({ onSearch }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search games..."
        variant="filled"
        borderRadius="3xl"
        onChange={(e) => onSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default searchText;
