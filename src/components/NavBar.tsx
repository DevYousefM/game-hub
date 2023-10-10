import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack marginLeft={2} padding="10px" spacing={5}>
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={(searchText: string) => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
