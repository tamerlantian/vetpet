import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, AddUserForm } from ".";
import { IoMdAdd } from "react-icons/io";
import { useAddUserMutation } from "../store";

const AddUser = ({ actionTitle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addUser, { isLoading }] = useAddUserMutation();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme="purple" onClick={onOpen}>
        {actionTitle}
      </Button>
      <ModalForm
        title={actionTitle}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <AddUserForm onClose={onClose} action={addUser} loading={isLoading} />
      </ModalForm>
    </>
  );
};

export default AddUser;
