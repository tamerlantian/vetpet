import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, FormEdit } from "../";

const ModifyUserButton = (data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineEdit />
      </button>
      <ModalForm
        title="Modify user"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <FormEdit userData={data} onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default ModifyUserButton;
