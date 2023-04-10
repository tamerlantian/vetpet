import { useDisclosure, Button } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { ModalForm, AddProductForm } from "../";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme="green" onClick={onOpen}>
        Add product
      </Button>
      <ModalForm
        title="Add product"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <AddProductForm onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default AddProduct;
