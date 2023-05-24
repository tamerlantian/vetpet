import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalForm, AddUserForm } from "..";
import { useEditUserMutation } from "../../store";

const EditUser = ({ data, title }) => {
  const [editUser, { isLoading }] = useEditUserMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineEdit />
      </button>
      <ModalForm
        title={title}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <AddUserForm
          defaultValues={data}
          onClose={onClose}
          action={editUser}
          loading={isLoading}
        />
      </ModalForm>
    </>
  );
};

export default EditUser;
