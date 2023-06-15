import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm } from "../../components";
import ProductForm from "./ProductForm";
import { useEditProductMutation } from "../../store/apis/productsSlice";

const EditProduct = ({ data }) => {
  const [editProduct, { isLoading }] = useEditProductMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineEdit />
      </button>
      <ModalForm
        title="Edit Product"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ProductForm
          action={editProduct}
          loading={isLoading}
          defaultValues={data}
          onClose={onClose}
        />
      </ModalForm>
    </>
  );
};

export default EditProduct;
