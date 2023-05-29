import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertDialog } from "../../components";
import { useDeletePetMutation } from "../../store";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/officesSlice";

const DeletePet = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletePet] = useDeletePetMutation();
  const { results, limit, totalPets } = useSelector((state) => state.petsSlice);

  const isLastItem = results === 1 && totalPets > limit;

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
        onAction={deletePet}
        actionName="Delete pet"
        isLastItem={isLastItem}
        prevPage={subPage}
      />
    </>
  );
};

export default DeletePet;
