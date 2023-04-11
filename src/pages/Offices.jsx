import React from "react";
import { Table, AddOffice, Header } from "../components";
import { useFetchOfficesQuery } from "../store";
import { Spinner, Container } from "@chakra-ui/react";
import { officesConfig } from "../data/dumpData";

const Offices = () => {
  const { data, isLoading, error } = useFetchOfficesQuery();

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
    content = <Table data={data} config={officesConfig} />;
  }

  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Business" title="Offices" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddOffice buttonName="Add office" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Offices;
