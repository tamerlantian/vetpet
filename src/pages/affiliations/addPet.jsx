import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm } from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useAddPetMutation } from "../../store/apis/petsSlice";
import PetForm from "./PetForm";

const AddPet = ({ buttonName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addPet, { isLoading }] = useAddPetMutation();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme={"purple"} onClick={onOpen}>
        {buttonName}
      </Button>
      <ModalForm
        title="Add pet"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <PetForm onClose={onClose} action={addPet} loading={isLoading} />
      </ModalForm>
    </>
  );
};

export default AddPet;
