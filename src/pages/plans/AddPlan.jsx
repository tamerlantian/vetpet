import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, AddPlanForm } from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useAddPlanMutation } from "../../store";

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
        <AddPlanForm onClose={onClose} action={addPlan} loading={isLoading} />
      </ModalForm>
    </>
  );
};

export default AddPlan;
