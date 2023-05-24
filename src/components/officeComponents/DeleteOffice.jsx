import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../";
import { useDeleteOfficeMutation } from "../../store";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/officesSlice";

const DeleteOffice = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteOffice] = useDeleteOfficeMutation();
  const { results, limit, totalUsers } = useSelector(
    (state) => state.officesSlice
  );

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
        onAction={deleteOffice}
        actionName="Delete office"
        isLastItem={isLastItem}
        prevPage={subPage}
      />
    </>
  );
};

export default DeleteOffice;
