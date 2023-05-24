import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeletePlanMutation } from "../../store";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/plansSlice";

const DeleteUser = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletePlan] = useDeletePlanMutation();
  const { results, limit, totalPlans } = useSelector(
    (state) => state.plansSlice
  );

  const isLastItem = results === 1 && totalPlans > limit;

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
        isLastItem={isLastItem}
        prevPage={subPage}
      />
    </>
  );
};

export default DeleteUser;
