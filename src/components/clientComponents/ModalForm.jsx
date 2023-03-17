import React, { useState } from "react";
import { Form, EditForm } from "..";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

import { useStateContext } from "../../contexts/ContextProvider";

// styles for Box component

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 450,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 1,
  p: 4,
  borderRadius: 5,
};

const ModalForm = ({ onCreateUser, userValues, onEditUser, opt }) => {
  const { isModalOpen, setIsModalOpen } = useStateContext();

  const handleClose = (value) => {
    setOpen(value);
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {opt === "create" ? (
            <Form onCreateUser={onCreateUser} />
          ) : (
            <EditForm onEditUser={onEditUser}  userValues={userValues} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;
