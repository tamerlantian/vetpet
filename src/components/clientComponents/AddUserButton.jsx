import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, Form } from "../";

const AddUserButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme={"green"} onClick={onOpen}>
        Add user
      </Button>
      <ModalForm
        title="Add user"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <Form onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default AddUserButton;
