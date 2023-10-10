import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">
        {colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
