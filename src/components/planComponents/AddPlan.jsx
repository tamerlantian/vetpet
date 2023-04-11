import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, AddPlanForm } from "..";
import { IoMdAdd } from "react-icons/io";

const AddPlan = ({ buttonName }) => {
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
        <AddPlanForm onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default AddPlan;