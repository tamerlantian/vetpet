import { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { AiOutlineLock } from "react-icons/ai";
import { BiShow, BiHide } from "react-icons/bi";

const InputPassword = ({ register, name }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" fontSize="1.2rem">
        <AiOutlineLock className="text-gray-400" />
      </InputLeftElement>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        {...register(name || "password", { required: "Password is required" })}
        size="lg"
        placeholder="*********"
      />
      <InputRightElement w="2.5rem">
        <Button
          onClick={handleClick}
          variant="ghost"
          className="mt-[0.3rem] mr-[1.5rem]"
          h="1.75rem"
          size="lg"
          leftIcon={
            show ? (
              <BiShow className="text-gray-500" />
            ) : (
              <BiHide className="text-gray-500" />
            )
          }
        ></Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputPassword;
