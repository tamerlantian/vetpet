import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../";
import { useDeleteProductMutation } from "../../store";

const DeleteProduct = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteProduct, results] = useDeleteProductMutation();
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
      />
    </>
  );
};

export default DeleteProduct;
