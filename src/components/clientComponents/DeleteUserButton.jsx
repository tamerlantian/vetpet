import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../";
import { useDeleteUserMutation } from "../../store";

const DeleteUserButton = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteUser, results] = useDeleteUserMutation();
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
      />
    </>
  );
};

export default DeleteUserButton;
