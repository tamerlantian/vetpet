import React from "react";
import { Table, AddUser, Header } from "../components";
import { useFetchUsersQuery } from "../store";
import { Spinner, Container } from "@chakra-ui/react";
import { config } from "../data/dumpData";

const Prospects = () => {
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
    content = <Table data={data} config={config} />;
  }

  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Users" title="Clients" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddUser buttonName="Add client" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Prospects;
