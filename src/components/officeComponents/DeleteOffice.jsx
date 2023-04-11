import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../";
import { useDeleteOfficeMutation } from "../../store";

const DeleteOffice = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteOffice, results] = useDeleteOfficeMutation();
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
        onAction={deleteOffice}
        actionName="Delete office"
      />
    </>
  );
};

export default DeleteOffice;
