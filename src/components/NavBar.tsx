import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack marginLeft={2} padding="10px" spacing={5}>
      <Image src={logo} boxSize="50px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
