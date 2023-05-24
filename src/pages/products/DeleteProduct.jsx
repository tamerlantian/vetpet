import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeleteProductMutation } from "../../store";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/productsSlice";

const DeleteProduct = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteProduct] = useDeleteProductMutation();
  const { results, limit, totalProducts } = useSelector(
    (state) => state.productsSlice
  );

  const isLastItem = results === 1 && totalProducts > limit;

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
        isLastItem={isLastItem}
        prevPage={subPage}
      />
    </>
  );
};

export default DeleteProduct;
