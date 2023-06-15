import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm } from "../../components";
import { IoMdAdd } from "react-icons/io";
import PlanForm from "./PlanForm";
import { useAddPlanMutation } from "../../store/apis/plansSlice";

const AddPlan = ({ buttonName }) => {
  const [addPlan, { isLoading }] = useAddPlanMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme="purple" onClick={onOpen}>
        {buttonName}
      </Button>
      <ModalForm
        title="Add plan"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <PlanForm onClose={onClose} action={addPlan} loading={isLoading} />
      </ModalForm>
    </>
  );
};

export default AddPlan;
