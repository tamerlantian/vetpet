import { FormErrorMessage } from "@chakra-ui/react";

const ErrorMessage = ({ error, message }) => {
  return error && <FormErrorMessage>{message}</FormErrorMessage>;
};

export default ErrorMessage;
