import { Fragment } from "react";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";

const optionButton = ({ children }) => {
  return (
    <Menu>
      <MenuButton
        px={4}
        py={1}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
      >
        ...
      </MenuButton>
      <MenuList>
        {children?.map((item, i) => {
          return item && <Fragment key={i}>{item}</Fragment>;
        })}
      </MenuList>
    </Menu>
  );
};

export default optionButton;
