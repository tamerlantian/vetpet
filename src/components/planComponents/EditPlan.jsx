import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, AddPlanForm } from "..";
import { useEditPlanMutation } from "../../store";

const EditPlan = ({ data }) => {
  const [editPlan, { isLoading }] = useEditPlanMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(data)
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
        <AddPlanForm
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
