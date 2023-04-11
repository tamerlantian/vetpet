import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, EditPlanForm } from "..";

const EditPlan = (data) => {
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
        <EditPlanForm planData={data} onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default EditPlan;
