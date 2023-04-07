import React from "react";
import { Table, AddUserButton } from "../components";
import { useFetchUsersQuery } from "../store";
import { Spinner } from "@chakra-ui/react";
import { config } from "../data/dumpData";

const Clients = () => {
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
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-10">
        <AddUserButton />
      </div>
      {content}
    </div>
  );
};

export default Clients;
