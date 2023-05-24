import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeleteUserMutation } from "../../store";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/employeesSlice";

const DeleteEmployee = ({ id, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteUser] = useDeleteUserMutation();
  const { results, limit, totalEmployees } = useSelector(
    (state) => state.employeesSlice
  );

  // isLastItem
  const isLastItem = results === 1 && totalEmployees > limit;

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

export default DeleteEmployee;
