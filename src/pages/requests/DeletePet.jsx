import { MenuItem, useDisclosure } from "@chakra-ui/react";
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
      <MenuItem className="w-full flex justify-start" onClick={onOpen}>
        Delete
      </MenuItem>
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