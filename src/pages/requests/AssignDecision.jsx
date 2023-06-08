import React, { useEffect, useState } from "react";
import {
  useDisclosure,
  Box,
  Stack,
  FormControl,
  Textarea,
  Button,
  ButtonGroup,
  FormLabel,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { ErrorMessage, ModalForm } from "../../components";
import { useUpdatePetMutation } from "../../store";
import { useForm } from "react-hook-form";
import useToastMsg from "../../hooks/useToastMsg";

const Form = ({ petId, onCancel }) => {
  const [status, setStatus] = useState("");
  const [updatePet] = useUpdatePetMutation();
  const toasMsg = useToastMsg();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      data.state = status;
      await updatePet({ id: petId, data });
      reset();
      toasMsg("Decision assigned", "success");
    } catch (error) {
      console.log(error);
      toasMsg("An error occured", "error");
    }
  };

  useEffect(() => {
    if (status) handleSubmit(onSubmit)();
  }, [status]);

  return (
    <Stack as={"form"} onSubmit={handleSubmit(onSubmit)} spacing={6}>
      <FormControl isInvalid={errors?.comment}>
        <FormLabel>Comment</FormLabel>
        <Textarea
          {...register("comment", { required: "Please add a comment" })}
        />
        <ErrorMessage
          error={errors?.comment}
          message={errors?.comment?.message}
        />
      </FormControl>
      <ButtonGroup display={"flex"} justifyContent={"space-between"}>
        <Button variant={"outline"} onClick={onCancel}>
          Cancel
        </Button>
        <HStack>
          <ButtonGroup isDisabled={errors?.comment || !dirtyFields?.comment}>
            <Button
              colorScheme="red"
              onClick={() => {
                setStatus("rejected");
                onCancel();
              }}
            >
              Reject
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {
                setStatus("accepted");
                onCancel();
              }}
            >
              Accept
            </Button>
          </ButtonGroup>
        </HStack>
      </ButtonGroup>
    </Stack>
  );
};

const AssignDecision = ({ id }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Box
        onClick={onOpen}
        role="button"
        w={"full"}
        children="Assign decision"
      />
      <ModalForm
        title={"Assign decision"}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        size={useBreakpointValue({ base: "xs", md: "md" })}
      >
        <Form petId={id} onCancel={onClose} />
      </ModalForm>
    </>
  );
};

export default AssignDecision;
