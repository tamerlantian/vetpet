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
import { useDispatch, useSelector } from "react-redux";
import { subPage } from "../store/slices/customersSlice";

const AlertDialog = ({ actionName, id, isOpen, onOpen, onClose, onAction }) => {
  const cancelRef = React.useRef();
  const displayToast = useToastMsg();
  const dispatch = useDispatch();
  const { results, limit, totalUsers } = useSelector(
    (state) => state.customersSlice
  );

  console.log(id)

  const handleDelete = async () => {
    try {
      await onAction(id).unwrap();
      if (results === 1 && totalUsers > limit) dispatch(subPage(1));
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
