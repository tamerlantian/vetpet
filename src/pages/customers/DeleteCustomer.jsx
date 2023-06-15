import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeleteUserMutation } from "../../store/apis/usersSlice";
import { useSelector } from "react-redux";

const DeleteCustomer = ({ id, title }) => {
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

export default DeleteCustomer;
