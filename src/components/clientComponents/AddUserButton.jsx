import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm, Form } from "../";
import { IoMdAdd } from "react-icons/io";

const AddUserButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<IoMdAdd  />}
        colorScheme={"green"}
        onClick={onOpen}
      >
        Add client
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
