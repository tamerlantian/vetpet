import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "..";
import { useDeleteProspectMutation } from "../../store";

const DeleteProspect = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteProspect, results] = useDeleteProspectMutation();
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
        onAction={deleteProspect}
        actionName="Delete prospect"
      />
    </>
  );
};

export default DeleteProspect;
