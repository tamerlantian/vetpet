import { useDisclosure } from "@chakra-ui/react";
import { AlertDialog } from "../../components";
import { useDeleteMyPetMutation } from "../../store";
import { useSelector } from "react-redux";
import { subPage } from "../../store/slices/officesSlice";

const DeletePet = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletePet] = useDeleteMyPetMutation();
  const { results, limit, totalPets } = useSelector((state) => state.petsSlice);

  const isLastItem = results === 1 && totalPets > limit;

  return (
    <>
      <button className="w-full flex justify-start" onClick={onOpen}>
        Delete
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
