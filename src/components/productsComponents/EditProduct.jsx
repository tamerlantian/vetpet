import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, AddProductForm } from "..";
import { useEditProductMutation } from "../../store";

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
        <AddProductForm
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
