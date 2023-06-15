import { useDisclosure, Button } from "@chakra-ui/react";
import { ModalForm } from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useAddOfficeMutation } from "../../store/apis/officesSlice";
import OfficeForm from "./OfficeForm";

const AddOffice = ({ buttonName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addOffice, { isLoading }] = useAddOfficeMutation();
  return (
    <>
      <Button leftIcon={<IoMdAdd />} colorScheme={"purple"} onClick={onOpen}>
        {buttonName}
      </Button>
      <ModalForm
        title="Add office"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <OfficeForm
          onClose={onClose}
          action={addOffice}
          isLoading={isLoading}
        />
      </ModalForm>
    </>
  );
};

export default AddOffice;
