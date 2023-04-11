import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "..";
import { useDeletePlanMutation } from "../../store";

const DeleteUser = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletePlan, results] = useDeletePlanMutation();
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
        onAction={deletePlan}
        actionName="Delete plan"
      />
    </>
  );
};

export default DeleteUser;
