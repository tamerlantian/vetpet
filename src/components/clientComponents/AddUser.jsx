import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, AddUserForm } from "..";
import { IoMdAdd } from "react-icons/io";

const AddUser = ({ buttonName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme={"green"} onClick={onOpen}>
        {buttonName}
      </Button>
      <ModalForm
        title="Add client"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <AddUserForm onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default AddUser;
