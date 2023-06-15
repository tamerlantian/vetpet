import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm } from "../../components";
import PlanForm from "./PlanForm";
import { useEditPlanMutation } from "../../store/apis/plansSlice";

const EditPlan = ({ data }) => {
  const [editPlan, { isLoading }] = useEditPlanMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineEdit />
      </button>
      <ModalForm
        title="Edit plan"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <PlanForm
          defaultValues={data}
          onClose={onClose}
          action={editPlan}
          loading={isLoading}
        />
      </ModalForm>
    </>
  );
};

export default EditPlan;
