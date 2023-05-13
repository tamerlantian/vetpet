import React, { Children, cloneElement, isValidElement } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalForm = ({ children, title, isOpen, onClose, onOpen }) => {
  const childrenWithProps = Children.map(children, (child, i) => {
    if (!isValidElement(child)) return null;
    return (
      <React.Fragment key={i}>cloneElement(child, {onClose});</React.Fragment>
    );
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
