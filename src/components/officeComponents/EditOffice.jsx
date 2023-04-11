import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, EditOfficeForm } from "..";

const EditOffice = (data) => {
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
        <EditOfficeForm officeData={data} onClose={onClose} />
      </ModalForm>
    </>
  );
};

export default EditOffice;
