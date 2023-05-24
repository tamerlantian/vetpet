import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, AddOfficeForm } from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useAddOfficeMutation } from "../../store";

const AddOffice = ({ buttonName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addOffice, { isLoading }] = useAddOfficeMutation();
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
        <AddOfficeForm
          onClose={onClose}
          action={addOffice}
          isLoading={isLoading}
        />
      </ModalForm>
    </>
  );
};

export default AddOffice;
