import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeleteOfficeMutation } from "../../store/apis/officesSlice";
import { useSelector } from "react-redux";

const DeleteOffice = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteOffice] = useDeleteOfficeMutation();
  // const { results, limit, totalUsers } = useSelector(
  //   (state) => state.officesSlice
  // );

  // const isLastItem = results === 1 && totalUsers > limit;

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
        // isLastItem={isLastItem}
        // prevPage={subPage}
      />
    </>
  );
};

export default DeleteOffice;
