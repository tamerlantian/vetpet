import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, EditProductForm } from "..";

const EditProduct = (data) => {
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
        <EditProductForm productData={data} onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default EditProduct;
