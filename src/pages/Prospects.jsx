import React from "react";
import { Table, Header } from "../components";
import { useFetchProspectsQuery } from "../store";
import { Spinner, Container } from "@chakra-ui/react";
import { prospectsConfig } from "../data/dumpData";

const Prospects = () => {
  const { data, isLoading, error } = useFetchProspectsQuery();
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
    content = <Table data={data} config={prospectsConfig} />;
  }

  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Users" title="Prospects" />
      <div className="bg-white mt-5 p-5 rounded-3xl">{content}</div>
    </Container>
  );
};

export default Prospects;
