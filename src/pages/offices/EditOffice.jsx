import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm} from "../../components";
import OfficeForm from "./OfficeForm"
import { useEditOfficeMutation } from "../../store/apis/officesSlice";

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
        <OfficeForm
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
