import { useDisclosure, Button } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { ModalForm } from "../../components";
import ProductForm from "./ProductForm";
import { useAddProductMutation } from "../../store/apis/productsSlice";

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
        <ProductForm
          onClose={onClose}
          action={addProduct}
          loading={isLoading}
        />
      </ModalForm>
    </>
  );
};

export default AddProduct;
