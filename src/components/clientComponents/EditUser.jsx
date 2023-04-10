import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, EditUserForm } from "..";

const EditUser = (data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineEdit />
      </button>
      <ModalForm
        title="Edit user"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <EditUserForm userData={data} onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default EditUser;
