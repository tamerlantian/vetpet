import { useEffect, useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGetUsersQuery } from "../../store/slices/usersSlice";

const SearchBar = ({ setSearchTerm, searchTerm, setPage }) => {
  const onChange = (e) => {
    setSearchTerm(e.currentTarget.value);
    setPage(1)
  };

  return (
    <InputGroup maxW={"xs"}>
      <InputRightElement pointerEvents={"none"}>
        <AiOutlineSearch className="text-gray-400" />
      </InputRightElement>
      <Input
        onChange={onChange}
        value={searchTerm}
        placeholder={"Search..."}
        mb={5}
        ml={5}
      />
    </InputGroup>
  );
};

export default SearchBar;
