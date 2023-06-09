import { Children, cloneElement, isValidElement } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalForm = ({ children, title, isOpen, onClose, onOpen, ...rest }) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (!isValidElement(child)) return null;
    return cloneElement(child, { onClose });
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered {...rest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{childrenWithProps}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForm;
