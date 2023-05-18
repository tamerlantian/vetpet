import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, AddUserForm } from "..";
import { IoMdAdd } from "react-icons/io";
import { useAddUserMutation } from "../../store";

const AddUser = ({ buttonName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addUser, { isLoading }] = useAddUserMutation();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme="purple" onClick={onOpen}>
        {buttonName}
      </Button>
      <ModalForm
        title="Add client"
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
