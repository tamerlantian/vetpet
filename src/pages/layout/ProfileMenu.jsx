import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Avatar,
  Center,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/slices/authSlice";
import useLogout from "../../hooks/useLogout";
import { SERVER } from "../../config/config";
import { PublicRoutes } from "../../models/routes";

const ProfileMenu = ({ onOpen }) => {
  const navigate = useNavigate();
  const logout = useLogout();
  const user = useSelector(selectCurrentUser);

  const handleLogout = async () => {
    await logout();
    navigate(PublicRoutes.LOGIN);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"sm"} src={`${SERVER}${user.photo}`} />
      </MenuButton>

      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar
            size={"2xl"}
            src={user.photo ? `${SERVER}${user.photo}` : ""}
          />
        </Center>
        <br />
        <VStack spacing={0}>
          <Text>{user.name}</Text>
          <Text color={"gray.500"}>{user.role}</Text>
        </VStack>
        <br />
        <MenuDivider />
        <MenuGroup>
          <MenuItem onClick={onOpen}>Profile</MenuItem>
          <MenuItem onClick={onOpen}>Settings</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
