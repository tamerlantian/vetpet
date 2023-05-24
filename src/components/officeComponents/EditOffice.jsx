import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm,  AddOfficeForm } from "..";
import { useEditOfficeMutation } from "../../store";

const EditOffice = ({ data }) => {
  const [editOffice, { isLoading }] = useEditOfficeMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineEdit />
      </button>
      <ModalForm
        title="Edit Office"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <AddOfficeForm
          action={editOffice}
          loading={isLoading}
          defaultValues={data}
          onClose={onClose}
        />
      </ModalForm>
    </>
  );
};

export default EditOffice;
