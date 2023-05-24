import React from "react";
import {
  AlertDialog as _AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import useToastMsg from "../hooks/useToastMsg";
import { useDispatch } from "react-redux";

const AlertDialog = ({
  actionName,
  id,
  isOpen,
  onClose,
  onAction,
  isLastItem,
  prevPage
}) => {
  const cancelRef = React.useRef();
  const displayToast = useToastMsg();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await onAction(id).unwrap();
      if (isLastItem) dispatch(prevPage(1));
      onClose();
      displayToast("Successfully deleted", "success", 2000, true);
    } catch (error) {
      if (error.status === 500) {
        displayToast("An error ocurred", "error", 2000, true);
      }
    }
  };

  return (
    <>
      <_AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {actionName}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </_AlertDialog>
    </>
  );
};

export default AlertDialog;
