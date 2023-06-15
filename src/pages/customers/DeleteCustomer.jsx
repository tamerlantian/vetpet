import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeleteUserMutation } from "../../store/slices/usersSlice";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/customersSlice";


const DeleteCustomer = ({ id, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteUser] = useDeleteUserMutation();
  const { results, limit, totalUsers } = useSelector(
    (state) => state.customersSlice
  );

  // isLastItem
  const isLastItem = results === 1 && totalUsers > limit;

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
        onAction={deleteUser}
        actionName={title}
        isLastItem={isLastItem}
        prevPage={subPage}
      />
    </>
  );
};

export default DeleteCustomer;
