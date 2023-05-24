import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeleteProspectMutation } from "../../store";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/prospectsSlice";
  


const DeleteProspect = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteProspect] = useDeleteProspectMutation();
  const { results, limit, totalProspects } = useSelector(
    (state) => state.prospectsSlice
  );

  // isLastItem
  const isLastItem = results === 1 && totalProspects > limit;

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
        onAction={deleteProspect}
        isLastItem={isLastItem}
        actionName="Delete prospect"
        prevPage={subPage}
      />
    </>
  );
};

export default DeleteProspect;
