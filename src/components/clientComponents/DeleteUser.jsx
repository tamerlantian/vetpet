import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "..";
import { useDeleteUserMutation } from "../../store";

const DeleteUser = ({ id, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteUser] = useDeleteUserMutation();
  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineDelete />
      </button>
      <AlertDialog
        id={id}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onAction={deleteUser}
        actionName={title}
      />
    </>
  );
};

export default DeleteUser;
