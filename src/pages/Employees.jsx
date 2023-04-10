import React from "react";
import { Table, AddUserButton, Header } from "../components";
import { useFetchUsersQuery } from "../store";
import { Spinner, Container } from "@chakra-ui/react";
import { employeesConfig } from "../data/dumpData";

const Employees = () => {
  const { data, isLoading, error } = useFetchUsersQuery();

  let content;

  if (isLoading) {
    content = (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = <Table data={data} config={employeesConfig} />;
  }

  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Users" title="Employees" /> 
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddUserButton />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Employees;
Employees;
