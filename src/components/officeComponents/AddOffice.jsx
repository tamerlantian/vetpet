import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, AddOfficeForm } from "..";
import { IoMdAdd } from "react-icons/io";

const AddOffice = ({ buttonName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme={"purple"} onClick={onOpen}>
        {buttonName}
      </Button>
      <ModalForm
        title="Add office"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <AddOfficeForm onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default AddOffice;
