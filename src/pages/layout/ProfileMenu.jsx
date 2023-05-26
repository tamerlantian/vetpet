import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/slices/authSlice";
import useLogout from "../../hooks/useLogout";



const ProfileMenu = ({ onOpen }) => {
  const navigate = useNavigate();
  const logout = useLogout();
  const user = useSelector(selectCurrentUser);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        rightIcon={<MdKeyboardArrowDown />}
      >
        {user.name}
      </MenuButton>
      <MenuList>
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
