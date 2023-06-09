import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { HiAtSymbol } from "react-icons/hi";

const InputEmail = ({ register, validations = {} }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" fontSize="1.2rem">
        <HiAtSymbol className="text-gray-400" />
      </InputLeftElement>
      <Input
        type="text"
        {...register("email", validations)}
        size="lg"
        placeholder="example@hotmail.com"
      />
    </InputGroup>
  );
};

export default InputEmail;
