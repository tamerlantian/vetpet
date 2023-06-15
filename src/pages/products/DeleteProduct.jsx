import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeleteProductMutation } from "../../store/apis/productsSlice";

const DeleteProduct = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteProduct] = useDeleteProductMutation();

  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineDelete />
      </button>
      <AlertDialog
        id={id}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onAction={deleteProduct}
        actionName="Delete product"
      />
    </>
  );
};

export default DeleteProduct;
