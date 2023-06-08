import React, { useEffect, useState } from "react";
import { useUpdatePetMutation } from "../../store";
import useToastMsg from "../../hooks/useToastMsg";

const Evaluate = ({ id, petState }) => {
  const toastMsg = useToastMsg();
  const [state, setState] = useState("unassigned");
  const [updatePet, { isLoading }] = useUpdatePetMutation();

  useEffect(() => {
    petState === "unassigned" ? setState("pending") : setState("unassigned");
  }, [petState]);

  
  const handleStateUpdate = async () => {
    try {
      updatePet({ id, data: { state } }).unwrap();
      toastMsg("State assigned", "success");
    } catch (error) {
      toastMsg("An error ocurred", "error");
    }
  };

  return <button onClick={handleStateUpdate} className={'w-full flex self-start'}>Evaluate</button>;
};

export default Evaluate;