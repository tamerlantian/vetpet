import { useDisclosure, Button } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { ModalForm, AddProductForm } from "../../components";
import { useAddProductMutation } from "../../store";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addProduct, { isLoading }] = useAddProductMutation();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme="purple" onClick={onOpen}>
        Add product
      </Button>
      <ModalForm
        title="Add product"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <AddProductForm
          onClose={onClose}
          action={addProduct}
          loading={isLoading}
        />
      </ModalForm>
    </>
  );
};

export default AddProduct;
