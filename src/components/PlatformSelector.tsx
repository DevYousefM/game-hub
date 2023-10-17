import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLookup from "../hooks/useLookup";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { FetchResponse } from "../services/api-client";

interface Props {
  onSelectPlatformId: (platformId: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectPlatformId,
  selectedPlatformId,
}: Props) => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = useLookup<Platform, FetchResponse<Platform>>(
    usePlatforms,
    selectedPlatformId
  );
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
