import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Drawer, Links } from "../";

const Hamburguer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <button ref={btnRef} onClick={onOpen}>
        <FiMenu />
      </button>
      <Drawer isOpen={isOpen} onClose={onClose} btnRef={btnRef}>
        <Links style="flex flex-col gap-4" />
      </Drawer>
    </>
  );
};

export default Hamburguer;
