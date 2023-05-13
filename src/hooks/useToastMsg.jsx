import { useToast } from "@chakra-ui/react";

const useToastMsg = () => {
  const toast = useToast();
  const displayToast = (title, status, duration = 2000, isClosable = true) => {
    return toast({
      title,
      status,
      duration,
      isClosable,
    });
  };
  return displayToast;
};

export default useToastMsg;
