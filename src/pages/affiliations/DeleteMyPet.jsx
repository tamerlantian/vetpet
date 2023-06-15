import { MenuItem, useDisclosure } from "@chakra-ui/react";
import { AlertDialog } from "../../components";
import { useDeleteMyPetMutation } from "../../store/apis/petsSlice";

const DeletePet = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deletePet] = useDeleteMyPetMutation();

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
      />
    </>
  );
};

export default DeletePet;
