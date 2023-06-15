import { useEffect, useState } from "react";
import { useUpdatePetMutation } from "../../store/apis/petsSlice";
import useToastMsg from "../../hooks/useToastMsg";
import { MenuItem } from "@chakra-ui/react";

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

  return <MenuItem onClick={handleStateUpdate} className={'w-full flex self-start'}>Evaluate</MenuItem>;
};

export default Evaluate;
