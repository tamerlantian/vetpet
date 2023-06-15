import { useEffect, useRef } from "react";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useToastMsg from "../../hooks/useToastMsg";
import { useUpdateMeMutation } from "../../store/slices/usersSlice";

const UpdatePhoto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { dirtyFields },
  } = useForm();
  const toastMsg = useToastMsg();
  const [updateMe] = useUpdateMeMutation();
  const inputFileRef = useRef(null);
  const { ref, ...rest } = register("photo");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("photo", data.photo[0]);
      reset();
      await updateMe(formData).unwrap();
      toastMsg("Updated successfully", "success");
    } catch (error) {
      toastMsg("An error occured", "error");
    }
  };

  const handleClick = () => {
    inputFileRef?.current.click();
  };

  useEffect(() => {
    if (dirtyFields.photo) handleSubmit(onSubmit)();
  }, [dirtyFields?.photo]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button onClick={handleClick} colorScheme="gray" w="100%">
        Change photo
      </Button>
      <input
        {...rest}
        ref={(e) => {
          ref(e);
          inputFileRef.current = e;
        }}
        name="photo"
        type="file"
        style={{ display: "none" }}
      />
    </form>
  );
};

export default UpdatePhoto;
